import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { days } from "@utils/getDate";
import DaySlide from "@components/organisms/menu/modify/DaySlide";
import { useRef, useState } from "react";
import { getScreenWidth } from "@utils/getScreenDimensions";

export default function ModifyView() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
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
      >
        {days.map((day, index) => (
          <View key={index} style={{ width: getScreenWidth(), flex: 1 }}>
            <DaySlide key={day} day={day} />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
