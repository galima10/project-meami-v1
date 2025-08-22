import { renderHook } from '@testing-library/react';
import { useBounceSpring } from './useBounceSpring';

describe('useBounceSpring', () => {
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
