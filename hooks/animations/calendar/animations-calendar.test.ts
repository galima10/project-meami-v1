import { renderHook, act } from "@testing-library/react";
import { useSmoothProgress } from "./TodayButton/useSmoothProgress";

describe("TodayButton : useSmoothProgress", () => {
  let rafCallbacks: FrameRequestCallback[] = [];

  beforeEach(() => {
    rafCallbacks = [];
    jest.spyOn(global, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return 1; // id fictif
    });
    jest.spyOn(global, "cancelAnimationFrame").mockImplementation((id) => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("initialise à 0 si localCountdown est null", () => {
    const { result } = renderHook(() => useSmoothProgress(null));
    expect(result.current).toBe(0);
  });

  it("avance progressivement jusqu'à 100", () => {
    const total = 2; // seconds
    const { result } = renderHook(() => useSmoothProgress(2, total));

    // on appelle la raf manuellement pour simuler l'animation
    act(() => {
      rafCallbacks.forEach((cb) => cb(performance.now()));
    });

    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThanOrEqual(100);

    // simuler plusieurs frames
    act(() => {
      for (let i = 0; i < 50; i++) {
        rafCallbacks.forEach((cb) => cb(performance.now()));
      }
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
