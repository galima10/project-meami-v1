import { renderHook, act } from "@testing-library/react";
import { useSmoothProgress } from "./TodayButton/useSmoothProgress";

describe("TodayButton : useSmoothProgress", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "requestAnimationFrame").mockImplementation((cb) => {
      return setTimeout(() => cb(Date.now()), 16) as unknown as number;
    });
    jest.spyOn(global, "cancelAnimationFrame").mockImplementation((id) => clearTimeout(id as any));
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  it("initialise à 0 si localCountdown est null", () => {
    const { result } = renderHook(() => useSmoothProgress(null));
    expect(result.current).toBe(0);
  });

  it("avance progressivement jusqu'à 100", () => {
    const total = 2; // 2 secondes pour le test rapide
    const { result } = renderHook(() => useSmoothProgress(2, total));

    // Initialement 0
    expect(result.current).toBe(0);

    act(() => {
      // On simule 1 frame (~16ms)
      jest.advanceTimersByTime(16);
    });
    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThanOrEqual(100);

    act(() => {
      // On simule la fin du countdown
      jest.advanceTimersByTime(2000);
    });
    expect(result.current).toBeLessThanOrEqual(100);
  });

  it("reset progress si localCountdown devient 0", () => {
    const { result, rerender } = renderHook(
      ({ countdown }) => useSmoothProgress(countdown),
      { initialProps: { countdown: 2 } }
    );

    act(() => {
      rerender({ countdown: 0 });
    });

    expect(result.current).toBe(0);
  });
});
