import theme from "@themes/index";
import { FrenchDayOfWeek } from "@utils/getDate";
import { getScreenWidth } from "@utils/getScreenDimensions";
import { ScrollView, StyleSheet, View } from "react-native";
import DayContainer from "../DayContainer";

interface DaySliderDisplayProps {
  days: FrenchDayOfWeek[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  momentSelected: any;
  todayIndex: number;
  scrollRef: React.RefObject<ScrollView | null>;
}

export default function DaySliderDisplay({
  days,
  currentIndex,
  setCurrentIndex,
  momentSelected,
  todayIndex,
  scrollRef
}: DaySliderDisplayProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        onMomentumScrollEnd={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const newIndex = Math.round(offsetX / getScreenWidth());
          setCurrentIndex(newIndex);
        }}
      >
        {days.map((day, index) => (
          <View key={index} style={{ width: getScreenWidth(), flex: 1 }}>
            <DayContainer
              currentIndex={currentIndex}
              index={index}
              day={day}
              momentSelected={momentSelected}
              todayIndex={todayIndex}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.properties.white,
    flexDirection: "row",
  },
});
