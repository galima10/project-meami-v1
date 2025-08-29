import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { getDate } from "@utils/getDate";

export default function ListView() {
  const { dayOfWeek } = getDate();
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <AppText style={styles.text}>Menu de la semaine Vue liste</AppText>
      <AppText style={{marginTop: 20}}>{dayOfWeek}</AppText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SN",
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
