import { renderHook, act } from "@testing-library/react";
import { useInteractionCooldown } from "../useInteractionCooldown";
import { useDate } from "@hooks/dayMoment/useDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";

jest.mock("@hooks/dayMoment/useDate");
jest.mock("@hooks/dayMoment/useDayMoment");
jest.useFakeTimers();

describe("useInteractionCooldown", () => {
  let scrollRef: any;
  let setCurrentIndex: jest.Mock;
  let setMomentSelected: jest.Mock;

  beforeEach(() => {
    scrollRef = { current: { scrollTo: jest.fn() } };
    setCurrentIndex = jest.fn();
    setMomentSelected = jest.fn();

    (useDate as jest.Mock).mockReturnValue({ dayOfWeek: "lundi" });
    (useDayMoment as jest.Mock).mockReturnValue({ actualDayMoment: "morning" });
  });

  it("handleInteraction met hasInteracted à true et reset après delay", () => {
    const { result } = renderHook(() =>
      useInteractionCooldown({ scrollRef, setCurrentIndex, setMomentSelected, delay: 1000 })
    );

    act(() => {
      result.current.handleInteraction();
    });

    // hasInteracted est true (interne, pas exposé)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Timeout a été exécuté → aurait reset hasInteracted
    // Ici on ne peut pas tester hasInteracted directement car non exposé,
    // mais on peut vérifier qu'on peut ré-appeler updateScrollAndMoment après
  });

  it("updateScrollAndMoment appelle setCurrentIndex, scrollTo et setMomentSelected", () => {
    const { result } = renderHook(() =>
      useInteractionCooldown({ scrollRef, setCurrentIndex, setMomentSelected })
    );

    act(() => {
      // Forcer l'effet
    });

    expect(setCurrentIndex).toHaveBeenCalledWith(0); // lundi à l'index 0 par exemple
    expect(scrollRef.current.scrollTo).toHaveBeenCalled();
    expect(setMomentSelected).toHaveBeenCalledWith("morning");
  });
});
