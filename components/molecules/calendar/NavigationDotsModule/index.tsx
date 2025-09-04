import { View, StyleSheet } from "react-native";
import NavigationDot from "@components/atoms/calendar/NavigationDot";
import { days } from "@utils/getDate";

interface NavigationDotsModuleProps {
  currentIndex: number;
  goToSlide: (index: number) => void;
  handleInteraction: () => void;
  todayIndex: number;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  actualDayMoment: "morning" | "noon" | "evening";
}

export default function NavigationDotsModule({
  currentIndex,
  goToSlide,
  handleInteraction,
  todayIndex,
  setMomentSelected,
  actualDayMoment,
}: NavigationDotsModuleProps) {
  function handleDotPress(index: number) {
    handleInteraction();
    goToSlide(index);

    if (todayIndex === index) {
      setMomentSelected(actualDayMoment);
    } else {
      setMomentSelected("morning");
    }
  }
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
