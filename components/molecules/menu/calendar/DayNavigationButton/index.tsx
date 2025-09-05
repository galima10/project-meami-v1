import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { useDayNavigationButton } from "@hooks/menu/calendar/dayNavigation/useDayNavigationButton";

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
}: {
  action: () => void;
  direction: "left" | "right";
  currentIndex?: number;
  momentSelected?: "morning" | "noon" | "evening";
}) {
  const { shouldBeWhite, isLeft } = useDayNavigationButton(
    momentSelected,
    currentIndex,
    direction
  );

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { opacity: 1 },
      ]}
      onPress={action}
    >
      <AppText
        style={[
          styles.buttonText,
          isLeft && shouldBeWhite && { color: "white" },
        ]}
      >
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
