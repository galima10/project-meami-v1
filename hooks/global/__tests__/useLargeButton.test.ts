import { renderHook, act } from '@testing-library/react';
import { useLargeButton } from '../useLargeButton';
import theme from '@themes/index';

describe('useLargeButton', () => {
  it('should initialize with isPressed false and secondaryColor darkRed', () => {
    const { result } = renderHook(() => useLargeButton('secondary'));

    expect(result.current.isPressed).toBe(false);
    expect(result.current.secondaryColor).toBe(theme.properties.darkRed);
  });

  it('should handlePressIn sets isPressed true and lightRed for secondary', () => {
    const { result } = renderHook(() => useLargeButton('secondary'));

    act(() => {
      result.current.handlePressIn();
    });

    expect(result.current.isPressed).toBe(true);
    expect(result.current.secondaryColor).toBe(theme.properties.lightRed);
  });

  it('should handlePressOut sets isPressed false and darkRed for secondary', () => {
    const { result } = renderHook(() => useLargeButton('secondary'));

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
    const { result } = renderHook(() => useLargeButton('primary'));

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
