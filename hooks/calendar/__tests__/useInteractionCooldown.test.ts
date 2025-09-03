import { renderHook, act } from "@testing-library/react";
import { useInteractionCooldown } from "../useInteractionCooldown";
import { useDate } from "@hooks/dayMoment/useDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";

jest.mock("@hooks/dayMoment/useDate");
jest.mock("@hooks/dayMoment/useDayMoment");
jest.useFakeTimers();

describe("Calendar : useInteractionCooldown", () => {
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

  it("handleInteraction démarre le countdown et reset après delay", () => {
    const { result } = renderHook(() =>
      useInteractionCooldown({
        scrollRef,
        setCurrentIndex,
        setMomentSelected,
        delay: 1000,
      })
    );

    act(() => {
      result.current.handleInteraction();
    });

    // resetProgressKey a bien été incrémenté (preuve que le hook force un reset du progress)
    const firstKey = result.current.resetProgressKey;
    expect(firstKey).toBeGreaterThanOrEqual(1);

    // Countdown démarre à delay/1000
    expect(result.current.countdown).toBe(1);

    // Après 1 seconde → reset automatique
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.countdown).toBe(0);
  });

  it("updateScrollAndMoment appelle setCurrentIndex, scrollTo et setMomentSelected quand pas d'interaction", () => {
    renderHook(() =>
      useInteractionCooldown({ scrollRef, setCurrentIndex, setMomentSelected })
    );

    // Le hook s’exécute immédiatement si aucune interaction
    expect(setCurrentIndex).toHaveBeenCalled();
    expect(scrollRef.current.scrollTo).toHaveBeenCalled();
    expect(setMomentSelected).toHaveBeenCalled();
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

    // Dès l’interaction → countdown = 3
    expect(result.current.countdown).toBe(3);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.countdown).toBe(2);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    // Une fois terminé → 0
    expect(result.current.countdown).toBe(0);
  });
});
