import { renderHook } from '@testing-library/react';
import { useWaveAnimation } from './useWaveAnimation';
import { useBounceSpring } from './useBounceSpring';

describe('Splash Screen : useBounceSpring', () => {
  it('returns an animated style with a transform scale property', () => {
    const { result } = renderHook(() => useBounceSpring());

    // Le hook doit retourner un objet
    expect(typeof result.current).toBe('object');

    // Il doit contenir transform
    expect(result.current).toHaveProperty('transform');

    // transform doit être un tableau
    expect(Array.isArray(result.current.transform)).toBe(true);

    // Le premier élément doit contenir scale
    expect(result.current.transform[0]).toHaveProperty('scale');
  });
});

describe('Splash Screen : useWaveAnimation', () => {
  it('returns an animated style with a transform translateY property', () => {
    const { result } = renderHook(() => useWaveAnimation(1));

    expect(typeof result.current).toBe('object');
    expect(result.current).toHaveProperty('transform');
    expect(Array.isArray(result.current.transform)).toBe(true);
    expect(result.current.transform[0]).toHaveProperty('translateY');
  });
});