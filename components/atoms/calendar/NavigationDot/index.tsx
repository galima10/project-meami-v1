import { Pressable, StyleSheet, View } from "react-native";
import theme from "@themes/index";

interface NavigationDotProps {
  index: number;
  currentIndex: number;
  action: () => void;
}

export default function NavigationDot({
  index,
  currentIndex,
  action
}: NavigationDotProps) {
  return (
    <Pressable
      onPress={action}
      style={styles.dotContainer}
    >
      <View style={[styles.dot, index === currentIndex && { opacity: 1 }]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.properties.brown,
    opacity: 0.25,
  },
  dotContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  }
});
