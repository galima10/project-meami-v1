import { Text, TextProps, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import React from "react";
import theme from "@themes/index";

const defaultStyle = {
  fontFamily: theme.properties.fontFamily,
  color: theme.properties.brown,
};

export const AppText: React.FC<TextProps> = ({ style, ...props }) => (
  <Text style={[defaultStyle, style]} {...props} />
);

export const AnimatedAppText: React.FC<TextProps> = ({ style, ...props }) => (
  <Animated.Text style={[defaultStyle, style]} {...props} />
);