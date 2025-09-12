import { StyleSheet, StyleProp, ViewStyle, ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import type { PropsWithChildren } from "react";
import { useDarkScreenContainer } from "@hooks/menu/list/useDarkScreenContainer";

interface DarkScreenContainerProps
  extends PropsWithChildren<{
      visible: boolean;
      style?: StyleProp<ViewStyle>;
    }>,
    ViewProps {} // <-- ajoute toutes les props de View ici

export default function DarkScreenContainer({
  children,
  visible,
  style,
  ...props
}: DarkScreenContainerProps) {
  const { mounted, animatedStyle } = useDarkScreenContainer(visible);

  if (!mounted) return null;

  return (
    <Animated.View style={[styles.container, animatedStyle, style]} {...props}>
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
