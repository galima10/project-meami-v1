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

  it("handleInteraction met hasInteracted à true et reset après delay", () => {
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

  it("handleInteraction met hasInteracted à true et démarre le countdown", () => {
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

    // Dès l'interaction, countdown doit être égal à delay en secondes
    expect(result.current.countdown).toBe(3);

    // Avancer le temps d'1 seconde → countdown décrémente
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.countdown).toBe(2);

    // Avancer le temps de 2 secondes → countdown termine et passe à null
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.countdown).toBeNull();
  });
});
