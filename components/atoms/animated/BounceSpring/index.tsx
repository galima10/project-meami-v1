// BounceSpring.tsx
import React from "react";
import {
  View,
  StyleSheet,
  TextProps,
  StyleProp,
  TextStyle,
  Text,
} from "react-native";
import Animated from "react-native-reanimated";
import { useBounceSpring } from "@hooks/animations/useBounceSpring";

export default function BounceSpring({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  const animatedStyle = useBounceSpring();

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});
