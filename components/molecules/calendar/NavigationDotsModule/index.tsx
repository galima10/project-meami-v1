import { View, StyleSheet } from "react-native";
import NavigationDot from "@components/atoms/calendar/NavigationDot";
import { days } from "@utils/getDate";

interface NavigationDotsModuleProps {
  currentIndex: number;
  goToSlide: (index: number) => void;
  handleInteraction: () => void;
}

export default function NavigationDotsModule({
  currentIndex,
  goToSlide,
  handleInteraction,
}: NavigationDotsModuleProps) {
  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <NavigationDot
          key={index}
          index={index}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
          handleInteraction={handleInteraction}
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
