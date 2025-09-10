import { View, StyleSheet, ScrollView } from "react-native";
import { getScreenWidth } from "@utils/getScreenDimensions";
import DaySlide from "../DaySlide";
import { days } from "@utils/getDate";

interface DaySliderProps {
  scrollRef: any;
  setCurrentIndex: (index: number) => void;
}

export default function DaySlider({ scrollRef, setCurrentIndex }: DaySliderProps) {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}
      scrollEnabled={true}
      pagingEnabled
      onMomentumScrollEnd={(e) => {
        const offsetX = e.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / getScreenWidth());
        setCurrentIndex(newIndex);
      }}
      style={{
        flex: 1,
        marginBottom: 40,
      }}
    >
      {days.map((day, index) => (
        <View key={index} style={{ width: getScreenWidth(), flex: 1 }}>
          <DaySlide key={day} day={day} />
        </View>
      ))}
    </ScrollView>
  );
}
