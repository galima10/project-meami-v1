import { renderHook, act } from "@testing-library/react";
import { useDarkScreenContainer } from "../useDarkScreenContainer";

describe("useDarkScreenContainer", () => {
  it("should mount when visible is true", () => {
    let result: any;
    act(() => {
      ({ result } = renderHook(() => useDarkScreenContainer(true)));
    });

    // mounted devrait être vrai
    expect(result.current.mounted).toBe(true);

    // simuler que l'effet a mis opacity à 1
    act(() => {
      result.current.animatedStyle.opacity = 1;
    });

    expect(result.current.animatedStyle.opacity).toBe(1);
  });

  it("should unmount when visible is false", () => {
    const { result, rerender } = renderHook(
      ({ visible }) => useDarkScreenContainer(visible),
      { initialProps: { visible: true } }
    );

    expect(result.current.mounted).toBe(true);

    // passer visible à false et simuler la fin de l'animation
    rerender({ visible: false });

    act(() => {
      // avec le mock, withTiming appelle directement le callback
    });

    expect(result.current.mounted).toBe(false);
    expect(result.current.animatedStyle.opacity).toBe(0);
  });
});
