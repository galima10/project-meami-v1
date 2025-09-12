import { useAppearDisappear } from "@hooks/animations/global/useAppearDisappear";
import type { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

interface DarkScreenContainerProps extends PropsWithChildren<{
  visible: boolean;
  style?: StyleProp<ViewStyle>;
}> {}

export default function DarkScreenContainer({
  children,
  visible,
  style,
}: DarkScreenContainerProps) {
  const { mounted, animatedStyle } = useAppearDisappear(visible);

  if (!mounted) return null;

  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
});
