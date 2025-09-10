import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import ModifyNavigationDotsModule from "@components/molecules/menu/modify/ModifyNavigationDotsModule";
import DaySlider from "@components/organisms/menu/modify/DaySlider";
import { useDaySlider } from "@hooks/menu/modify/useDaySlider";

export default function ModifyView() {
  const { scrollRef, currentIndex, setCurrentIndex, goToSlide } =
    useDaySlider();

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <DaySlider
        scrollRef={scrollRef}
        setCurrentIndex={setCurrentIndex}
      />
      <ModifyNavigationDotsModule
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
