import { View, StyleSheet, ImageBackground } from "react-native";
import ModifyNavigationDotsModule from "@components/molecules/menu/modify/ModifyNavigationDotsModule";
import DaySlider from "@components/organisms/menu/modify/DaySlider";
import { useDaySlider } from "@hooks/menu/modify/useDaySlider";
import DarkScreenContainer from "@components/organisms/global/DarkScreenContainer";
import { useState } from "react";
import RecipesSideBar from "@components/organisms/menu/modify/RecipesSideBar";
import { days } from "@utils/getDate";

export default function ModifyView() {
  const { scrollRef, currentIndex, setCurrentIndex, goToSlide } =
    useDaySlider();

  const [isDarkScreenVisible, setIsDarkScreenVisible] = useState(false);
  const [momentSelected, setMomentSelected] = useState<
    "Matin" | "Midi" | "Soir" | undefined
  >(undefined);

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <DaySlider
        scrollRef={scrollRef}
        setIsDarkScreenVisible={setIsDarkScreenVisible}
        setCurrentIndex={setCurrentIndex}
        setMomentSelected={setMomentSelected}
        momentSelected={momentSelected}
      />
      <ModifyNavigationDotsModule
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
      <DarkScreenContainer visible={isDarkScreenVisible}>
        <RecipesSideBar
          momentSelected={momentSelected}
          setIsDarkScreenVisible={setIsDarkScreenVisible}
          daySelected={days[currentIndex]}
          setMomentSelected={setMomentSelected}
        />
      </DarkScreenContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
