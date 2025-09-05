import { renderHook } from '@testing-library/react';
import { useTabButton } from './useTabButton';
import { useTopButtonNavigation } from './useTopButtonNavigation';
import { usePathname } from 'expo-router';

// Mock de usePathname
jest.mock('expo-router', () => ({
  usePathname: jest.fn(),
}));

describe('useTabButton', () => {
  const mockedUsePathname = usePathname as jest.Mock;

  it('should return true when the first segment matches', () => {
    mockedUsePathname.mockReturnValue('/menuViews/calendar');

    const { result } = renderHook(() => useTabButton('menuViews/calendar'));
    expect(result.current.isActive).toBe(true);
  });

  it('should return true when only the first segment matches', () => {
    mockedUsePathname.mockReturnValue('/menuViews/otherPage');

    const { result } = renderHook(() => useTabButton('menuViews/calendar'));
    expect(result.current.isActive).toBe(true);
  });

  it('should return false when first segment does not match', () => {
    mockedUsePathname.mockReturnValue('/cartViews/list');

    const { result } = renderHook(() => useTabButton('menuViews/calendar'));
    expect(result.current.isActive).toBe(false);
  });

  it('should handle root path', () => {
    mockedUsePathname.mockReturnValue('/');

    const { result } = renderHook(() => useTabButton('menuViews/calendar'));
    expect(result.current.isActive).toBe(false);
  });
});

describe('useTopButtonNavigation', () => {
  const mockedUsePathname = usePathname as jest.Mock;

  it('should return true for isActive when pathname matches routeName', () => {
    mockedUsePathname.mockReturnValue('/menuViews/calendar');

    const { result } = renderHook(() =>
      useTopButtonNavigation({ routeName: 'menuViews/calendar' })
    );

    expect(result.current.isActive).toBe(true);
  });

  it('should return false for isActive when pathname does not match routeName', () => {
    mockedUsePathname.mockReturnValue('/cartViews/list');

    const { result } = renderHook(() =>
      useTopButtonNavigation({ routeName: 'menuViews/calendar' })
    );

    expect(result.current.isActive).toBe(false);
  });

  it('should handle undefined routeName gracefully', () => {
    mockedUsePathname.mockReturnValue('/menuViews/calendar');

    const { result } = renderHook(() =>
      useTopButtonNavigation({})
    );

    expect(result.current.isActive).toBe(false);
  });
});
