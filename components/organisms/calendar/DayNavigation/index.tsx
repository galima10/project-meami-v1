import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useDayNavigation } from "@hooks/calendar/useDayNavigation";

interface DayNavigationProps {
  goToSlide: (index: number) => void;
  currentIndex: number;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  handleInteraction: () => void;
  todayIndex: number;
}

export default function DayNavigation({
  currentIndex,
  setMomentSelected,
  handleInteraction,
  todayIndex,
  goToSlide,
}: DayNavigationProps) {
  const { goPrevious, goNext } = useDayNavigation({
    currentIndex,
    todayIndex,
    goToSlide,
    setMomentSelected,
    handleInteraction,
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={goPrevious}>
        <AppText style={styles.buttonText}>◀</AppText>
      </Pressable>
      <Pressable style={styles.button} onPress={goNext}>
        <AppText style={styles.buttonText}>▶</AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
  },
  button: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 32,
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
  },
});
