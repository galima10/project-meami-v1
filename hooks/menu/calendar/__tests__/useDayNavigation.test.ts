import { act, renderHook } from "@testing-library/react";
import { useDayNavigation } from "../useDayNavigation";

describe("Calendar : useDayNavigation", () => {
  it("appel goToSlide et handleInteraction correctement pour goNext", () => {
    const goToSlide = jest.fn();
    const setMomentSelected = jest.fn();
    const handleInteraction = jest.fn();

    const { result } = renderHook(() =>
      useDayNavigation({
        currentIndex: 1,
        todayIndex: 2,
        goToSlide,
        setMomentSelected,
        handleInteraction,
      })
    );

    act(() => result.current.goNext());

    expect(goToSlide).toHaveBeenCalledWith(2); // currentIndex + 1
    expect(handleInteraction).toHaveBeenCalled();
    // ici tu peux éventuellement vérifier la logique de sélection du moment
  });

  it("appel goToSlide et handleInteraction correctement pour goPrevious", () => {
    const goToSlide = jest.fn();
    const setMomentSelected = jest.fn();
    const handleInteraction = jest.fn();

    const { result } = renderHook(() =>
      useDayNavigation({
        currentIndex: 1,
        todayIndex: 0,
        goToSlide,
        setMomentSelected,
        handleInteraction,
      })
    );

    act(() => result.current.goPrevious());

    expect(goToSlide).toHaveBeenCalledWith(0); // currentIndex - 1
    expect(handleInteraction).toHaveBeenCalled();
  });
});
