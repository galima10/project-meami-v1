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
  const total = 2; // seconds
  const { result } = renderHook(() => useSmoothProgress(2, total));

  let fakeTime = 0;

  // on simule les frames jusqu'à dépasser le temps total
  act(() => {
    while (result.current < 100) {
      fakeTime += 16; // ~60fps
      rafCallbacks.forEach((cb) => cb(fakeTime));
    }
  });

  // progress doit finir à 100%
  expect(result.current).toBe(100);
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
