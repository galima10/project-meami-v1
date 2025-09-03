import { renderHook, act } from "@testing-library/react";
import { useSmoothProgress } from "./TodayButton/useSmoothProgress";

describe("TodayButton : useSmoothProgress", () => {
  let rafQueue: FrameRequestCallback[] = [];

  beforeEach(() => {
    rafQueue = [];

    jest.spyOn(global, "requestAnimationFrame").mockImplementation((cb) => {
      rafQueue.push(cb);
      return rafQueue.length; // id fictif
    });

    jest.spyOn(global, "cancelAnimationFrame").mockImplementation((id) => {
      rafQueue[id - 1] = () => {}; // callback neutre
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("initialise à 0 si localCountdown est 0", () => {
    const { result } = renderHook(() => useSmoothProgress(0, 15, 0));
    expect(result.current).toBe(0);
  });

  it("avance progressivement jusqu'à 100", () => {
    const total = 2; // seconds
    let resetKey = 0;

    const { result, rerender } = renderHook(
      ({ countdown, key }) => useSmoothProgress(countdown, total, key),
      { initialProps: { countdown: 2, key: resetKey } }
    );

    let fakeTime = 0;
    const frameMs = 50; // 20 fps
    const maxFrames = Math.ceil((total * 1000) / frameMs);

    act(() => {
      for (let i = 0; i < maxFrames; i++) {
        fakeTime += frameMs;
        const callbacks = [...rafQueue];
        rafQueue.length = 0;
        callbacks.forEach((cb) => cb(fakeTime));
      }
    });

    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThanOrEqual(100);

    // Simuler encore quelques frames pour vérifier que le progress ne dépasse pas 100
    act(() => {
      for (let i = 0; i < 5; i++) {
        fakeTime += frameMs;
        const callbacks = [...rafQueue];
        rafQueue.length = 0;
        callbacks.forEach((cb) => cb(fakeTime));
      }
    });

    expect(result.current).toBeLessThanOrEqual(100);

    // Réinitialiser avec la même countdown mais nouvelle clé
    resetKey++;
    act(() => {
      rerender({ countdown: 2, key: resetKey });
    });

    // Après reset, progress doit repartir à 0
    expect(result.current).toBe(0);
  });

  it("reset progress si localCountdown devient 0", () => {
    let resetKey = 0;
    const { result, rerender } = renderHook(
      ({ countdown, key }) => useSmoothProgress(countdown, 15, key),
      { initialProps: { countdown: 2, key: resetKey } }
    );

    act(() => {
      resetKey++;
      rerender({ countdown: 0, key: resetKey });
    });

    expect(result.current).toBe(0);
  });
});