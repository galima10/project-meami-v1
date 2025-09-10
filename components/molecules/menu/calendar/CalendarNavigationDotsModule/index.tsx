import NavigationDot from "@components/atoms/menu/global/NavigationDot";
import { days } from "@utils/getDate";
import { StyleSheet, View } from "react-native";
import { useCalendarNavigationDotsModule } from "@hooks/menu/calendar/dayNavigation/useCalendarNavigationDotsModule";

interface CalendarNavigationDotsModuleProps {
  currentIndex: number;
  goToSlide: (index: number) => void;
  handleInteraction: () => void;
  todayIndex: number;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  actualDayMoment: "morning" | "noon" | "evening";
}

export default function CalendarNavigationDotsModule({
  currentIndex,
  goToSlide,
  handleInteraction,
  todayIndex,
  setMomentSelected,
  actualDayMoment,
}: CalendarNavigationDotsModuleProps) {
  const { handleDotPress } = useCalendarNavigationDotsModule(
    goToSlide,
    handleInteraction,
    todayIndex,
    setMomentSelected,
    actualDayMoment
  );
  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <NavigationDot
          key={index}
          index={index}
          currentIndex={currentIndex}
          action={() => handleDotPress(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
});
