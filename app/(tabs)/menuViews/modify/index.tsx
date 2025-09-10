import { View, StyleSheet, ImageBackground } from "react-native";
import DaySlide from "@components/organisms/menu/modify/DaySlide";

export default function ModifyView() {
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <DaySlide />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
