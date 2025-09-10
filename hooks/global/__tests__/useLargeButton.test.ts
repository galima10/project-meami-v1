import { act, renderHook } from '@testing-library/react';
import theme from '@themes/index';
import { useAppButton } from '../useAppButton';

describe('useAppButton', () => {
  it('should initialize with isPressed false and secondaryColor darkRed', () => {
    const { result } = renderHook(() => useAppButton('secondary'));

    expect(result.current.isPressed).toBe(false);
    expect(result.current.secondaryColor).toBe(theme.properties.darkRed);
  });

  it('should handlePressIn sets isPressed true and lightRed for secondary', () => {
    const { result } = renderHook(() => useAppButton('secondary'));

    act(() => {
      result.current.handlePressIn();
    });

    expect(result.current.isPressed).toBe(true);
    expect(result.current.secondaryColor).toBe(theme.properties.lightRed);
  });

  it('should handlePressOut sets isPressed false and darkRed for secondary', () => {
    const { result } = renderHook(() => useAppButton('secondary'));

    // First press in
    act(() => {
      result.current.handlePressIn();
    });

    // Then release
    act(() => {
      result.current.handlePressOut();
    });

    expect(result.current.isPressed).toBe(false);
    expect(result.current.secondaryColor).toBe(theme.properties.darkRed);
  });

  it('should not change secondaryColor for primary type', () => {
    const { result } = renderHook(() => useAppButton('primary'));

    act(() => {
      result.current.handlePressIn();
    });

    expect(result.current.isPressed).toBe(true);
    expect(result.current.secondaryColor).toBe(theme.properties.darkRed);

    act(() => {
      result.current.handlePressOut();
    });

    expect(result.current.isPressed).toBe(false);
    expect(result.current.secondaryColor).toBe(theme.properties.darkRed);
  });
});
