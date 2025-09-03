import { Pressable, StyleSheet, View } from "react-native";
import theme from "@themes/index";

interface NavigationDotProps {
  index: number;
  currentIndex: number;
  goToSlide: (index: number) => void;
  handleInteraction: () => void;
}

export default function NavigationDot({
  index,
  currentIndex,
  goToSlide,
  handleInteraction
}: NavigationDotProps) {
  return (
    <Pressable
      onPress={() => {
        goToSlide(index);
        handleInteraction();
      }}
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
