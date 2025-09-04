import { useDate } from "@hooks/menu/dayMoment/useDate";
import { useDayMoment } from "@hooks/menu/dayMoment/useDayMoment";
import { act, renderHook } from "@testing-library/react";
import { updateScrollAndMoment } from "@utils/scrollCalendarView";
import { useInteractionCooldown } from "../useInteractionCooldown";

jest.mock("@hooks/menu/dayMoment/useDate");
jest.mock("@hooks/menu/dayMoment/useDayMoment");
jest.mock("@utils/scrollCalendarView");
jest.useFakeTimers();

describe("Calendar : useInteractionCooldown", () => {
  let scrollRef: any;
  let setCurrentIndex: jest.Mock;
  let setMomentSelected: jest.Mock;
  let mockRefreshDateInfo: jest.Mock;

  beforeEach(() => {
    scrollRef = { current: { scrollTo: jest.fn() } };
    setCurrentIndex = jest.fn();
    setMomentSelected = jest.fn();
    mockRefreshDateInfo = jest.fn();

    (useDate as jest.Mock).mockReturnValue({
      dayOfWeek: "lundi",
      rawDateInfo: { dayOfWeek: "lundi", hour: 10 },
      refreshDateInfo: mockRefreshDateInfo,
    });

    (useDayMoment as jest.Mock).mockReturnValue({
      actualDayMoment: "morning",
    });

    (updateScrollAndMoment as jest.Mock).mockClear();
  });

  it("updateScrollAndMoment est appelé automatiquement si pas d'interaction", () => {
    renderHook(() =>
      useInteractionCooldown({
        scrollRef,
        setCurrentIndex,
        setMomentSelected,
      })
    );

    expect(updateScrollAndMoment).toHaveBeenCalledWith(
      scrollRef,
      setCurrentIndex,
      setMomentSelected,
      "lundi",
      "morning"
    );
  });

  it("forceRefresh déclenche updateScrollAndMoment même si hasInteracted=false", () => {
    const { result } = renderHook(() =>
      useInteractionCooldown({
        scrollRef,
        setCurrentIndex,
        setMomentSelected,
      })
    );

    act(() => {
      result.current.forceRefresh();
    });

    // le hook écoute refreshKey et relance updateScrollAndMoment
    expect(updateScrollAndMoment).toHaveBeenCalledWith(
      scrollRef,
      setCurrentIndex,
      setMomentSelected,
      "lundi",
      "morning"
    );
    expect(mockRefreshDateInfo).toHaveBeenCalled();
  });

  it("le countdown décrémente correctement chaque seconde", () => {
    const { result } = renderHook(() =>
      useInteractionCooldown({
        scrollRef,
        setCurrentIndex,
        setMomentSelected,
        delay: 3000,
      })
    );

    act(() => {
      result.current.handleInteraction();
    });

    expect(result.current.countdown).toBe(3);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.countdown).toBe(2);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.countdown).toBe(0);
  });
});
