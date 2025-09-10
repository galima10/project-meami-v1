import { renderHook, act } from '@testing-library/react';
import { useDayNavigationButton } from '../dayNavigation/useDayNavigationButton';

describe('useDayNavigationButton', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return correct flags for left and right', () => {
    const { result: hookLeft } = renderHook(() =>
      useDayNavigationButton('morning', 0, 'left')
    );
    expect(hookLeft.current.isLeft).toBe(true);
    expect(hookLeft.current.isRight).toBe(false);

    const { result: hookRight } = renderHook(() =>
      useDayNavigationButton('morning', 0, 'right')
    );
    expect(hookRight.current.isLeft).toBe(false);
    expect(hookRight.current.isRight).toBe(true);
  });

  it('should calculate shouldBeWhite correctly for evening', () => {
    [0, 3, 4, 5].forEach(index => {
      const { result } = renderHook(() =>
        useDayNavigationButton('evening', index, 'left')
      );

      act(() => {
        jest.advanceTimersByTime(50);
      });

      expect(result.current.shouldBeWhite).toBe(true);
    });

    const { result: resultOther } = renderHook(() =>
      useDayNavigationButton('evening', 1, 'left')
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(resultOther.current.shouldBeWhite).toBe(false);
  });

  it('should calculate shouldBeWhite correctly for noon', () => {
    const { result: result4 } = renderHook(() =>
      useDayNavigationButton('noon', 4, 'left')
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(result4.current.shouldBeWhite).toBe(true);

    const { result: resultOther } = renderHook(() =>
      useDayNavigationButton('noon', 3, 'left')
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(resultOther.current.shouldBeWhite).toBe(false);
  });

  it('should default safeIndex to -1 when currentIndex is undefined', () => {
    const { result } = renderHook(() =>
      useDayNavigationButton('morning', undefined, 'left')
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(result.current.shouldBeWhite).toBe(false);
  });
});
