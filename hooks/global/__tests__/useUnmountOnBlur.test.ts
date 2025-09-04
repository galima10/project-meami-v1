import { renderHook } from "@testing-library/react";
import { useUnmountOnBlur } from "../useUnmountOnBlur";

describe("useUnmountOnBlur", () => {
  it("appelle onFocus au montage et le cleanup + onBlur au démontage", () => {
    const cleanupFocus = jest.fn();
    const onFocus = jest.fn(() => cleanupFocus);
    const onBlur = jest.fn();

    const { unmount } = renderHook(() => useUnmountOnBlur(onFocus, onBlur));

    // au montage
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(cleanupFocus).not.toHaveBeenCalled();
    expect(onBlur).not.toHaveBeenCalled();

    // au démontage
    unmount();
    expect(cleanupFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("ne crash pas si onBlur est omis et cleanup retourné", () => {
    const cleanupFocus = jest.fn();
    const onFocus = jest.fn(() => cleanupFocus);

    const { unmount } = renderHook(() => useUnmountOnBlur(onFocus));

    expect(onFocus).toHaveBeenCalledTimes(1);
    unmount();
    expect(cleanupFocus).toHaveBeenCalledTimes(1);
  });
});
