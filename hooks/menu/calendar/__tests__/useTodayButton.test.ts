import { act, renderHook } from "@testing-library/react";
import { useTodayButton } from "../useTodayButton";

describe("useTodayButton", () => {
  it("initialise localCountdown avec countdown et met à jour quand countdown change", () => {
    let countdown = 10;
    const setHasInteracted = jest.fn();
    const forceRefresh = jest.fn();

    const { result, rerender } = renderHook(
      ({ countdown }) =>
        useTodayButton(countdown, setHasInteracted, forceRefresh),
      { initialProps: { countdown } }
    );

    // valeur initiale
    expect(result.current.localCountdown).toBe(10);

    // changement du countdown
    countdown = 5;
    rerender({ countdown });
    expect(result.current.localCountdown).toBe(5);
  });

  it("handlePressIn met isPressed à true", () => {
    const setHasInteracted = jest.fn();
    const forceRefresh = jest.fn();

    const { result } = renderHook(() =>
      useTodayButton(10, setHasInteracted, forceRefresh)
    );

    act(() => {
      result.current.handlePressIn();
    });

    expect(result.current.isPressed).toBe(true);
  });

  it("handlePressOut appelle setHasInteracted(false), forceRefresh et met isPressed à false", () => {
    const setHasInteracted = jest.fn();
    const forceRefresh = jest.fn();

    const { result } = renderHook(() =>
      useTodayButton(10, setHasInteracted, forceRefresh)
    );

    act(() => {
      result.current.handlePressIn(); // pour mettre isPressed à true
    });
    expect(result.current.isPressed).toBe(true);

    act(() => {
      result.current.handlePressOut();
    });

    expect(setHasInteracted).toHaveBeenCalledWith(false);
    expect(forceRefresh).toHaveBeenCalled();
    expect(result.current.isPressed).toBe(false);
  });
});
