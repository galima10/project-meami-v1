import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import type { PropsWithChildren } from "react";
import { useDarkScreenContainer } from "@hooks/menu/list/useDarkScreenContainer";

type DarkScreenContainerProps = PropsWithChildren<{
  visible: boolean;
}>;

export default function DarkScreenContainer({
  children,
  visible,
}: DarkScreenContainerProps) {
  const { mounted, animatedStyle } = useDarkScreenContainer(visible);

  if (!mounted) return null;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
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
  },
});
