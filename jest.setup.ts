import React from "react";

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

jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    __esModule: true,
    Svg: (props: any) => React.createElement('svg', props),
    Path: (props: any) => React.createElement('path', props),
    Circle: (props: any) => React.createElement('circle', props),
    Rect: (props: any) => React.createElement('rect', props),
    G: (props: any) => React.createElement('g', props),
    // Ajoute d'autres si besoin (Line, Ellipse, Polygon, Polyline, etc.)
  };
});

jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");
  return {
    ...actual,
    useFocusEffect: (cb: any) => {
      // exécute le callback dans un useEffect, après le render
      React.useEffect(cb, []);
    },
  };
});
