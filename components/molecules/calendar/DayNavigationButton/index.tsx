import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";

interface DayNavigationButtonProps {
  action: () => void;
  direction: "left" | "right";
  currentIndex?: number;
  momentSelected?: "morning" | "noon" | "evening";
}

export default function DayNavigationButton({
  action,
  direction,
  currentIndex,
  momentSelected,
}: DayNavigationButtonProps) {
  const safeIndex = currentIndex ?? -1;
  const shouldBeWhite =
    (momentSelected === "evening" && [1, 2, 3, 5].includes(safeIndex)) ||
    (momentSelected === "noon" && safeIndex === 2);
  const conditionalStyle = StyleSheet.flatten([
    styles.buttonText,
    direction === "left" && shouldBeWhite && { color: "white" },
  ]);
  
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { opacity: 1 }, // applique quand pressed = true
      ]}
      onPress={action}
    >
      <AppText style={conditionalStyle}>
        {direction === "left" ? "◀" : "▶"}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    opacity: 0.4,
  },
  buttonText: {
    fontSize: 32,
  },
});
