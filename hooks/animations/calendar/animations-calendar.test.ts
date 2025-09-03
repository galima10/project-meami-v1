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

  it("initialise à 0 si localCountdown est 0", () => {
    const { result } = renderHook(() => useSmoothProgress(0));
    expect(result.current).toBe(0);
  });

  it("avance progressivement jusqu'à 100", () => {
    const total = 2; // secondes
    const { result } = renderHook(() => useSmoothProgress(2, total));

    let fakeTime = 0;

    act(() => {
      for (let i = 0; i < 50; i++) {
        fakeTime += 50; // simuler 50ms par frame (~20fps)
        const cbs = [...rafCallbacks];
        rafCallbacks.length = 0;
        cbs.forEach((cb) => cb(fakeTime));
      }
    });

    // Le progress doit avoir commencé à augmenter
    expect(result.current).toBeGreaterThan(0);

    // Le progress doit être ≤ 100%
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
