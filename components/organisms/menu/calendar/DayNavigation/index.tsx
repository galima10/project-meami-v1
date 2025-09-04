import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { useDayNavigation } from "@hooks/calendar/useDayNavigation";
import DayNavigationButton from "@components/molecules/menu/calendar/DayNavigationButton";

interface DayNavigationProps {
  goToSlide: (index: number) => void;
  currentIndex: number;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  handleInteraction: () => void;
  todayIndex: number;
  momentSelected: "morning" | "noon" | "evening";
}

export default function DayNavigation({
  currentIndex,
  setMomentSelected,
  momentSelected,
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
      <DayNavigationButton action={goPrevious} currentIndex={currentIndex} momentSelected={momentSelected} direction="left" />
      <DayNavigationButton action={goNext} direction="right" />
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
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
  },
});
