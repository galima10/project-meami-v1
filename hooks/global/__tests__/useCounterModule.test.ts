import { renderHook, act } from "@testing-library/react";
import { useCounterModule } from "../useCounterModule";

describe("useCounterModule", () => {
  it("should initialize with the given quantity", () => {
    const { result } = renderHook(() => useCounterModule(5));
    expect(result.current.number).toBe("5");
  });

  it("should increment the number when handleAdd is called", () => {
    const { result } = renderHook(() => useCounterModule(2));

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.number).toBe("3");
  });

  it("should decrement the number when handleRemove is called", () => {
    const { result } = renderHook(() => useCounterModule(2));

    act(() => {
      result.current.handleRemove();
    });

    expect(result.current.number).toBe("1");
  });

  it("should not decrement below 0", () => {
    const { result } = renderHook(() => useCounterModule(0));

    act(() => {
      result.current.handleRemove();
    });

    expect(result.current.number).toBe("0");
  });

  it("should allow manual update with onChangeNumber", () => {
    const { result } = renderHook(() => useCounterModule(1));

    act(() => {
      result.current.onChangeNumber("42");
    });

    expect(result.current.number).toBe("42");
  });
});
