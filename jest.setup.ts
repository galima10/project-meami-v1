// jest.setup.ts
global.__DEV__ = true;

jest.mock('react-native-reanimated', () => {
  // Mock minimal juste pour tes hooks
  return {
    // Hooks
    useSharedValue: (value: any) => ({ value }),
    useAnimatedStyle: (fn: any) => fn(),
    withTiming: (value: any) => value,
    withRepeat: (animation: any) => animation,
    withSequence: (animation: any) => animation,
    withDelay: (_delay: any, animation: any) => animation,
    Easing: { bezier: () => {}, out: () => {} },

    // Autres exports nécessaires pour éviter des erreurs
    addWhitelistedUIProps: () => {},
    default: { call: () => {} },
  };
});
