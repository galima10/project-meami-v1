import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import LargeButton from "@components/molecules/global/LargeButton";
import { useRouter } from "expo-router";

export default function ListView() {
  const router = useRouter();
  const { dayOfWeek } = getDateInfo();
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <View style={styles.buttonsContainer}>
        <LargeButton text="Liste des recettes" action={() => router.push("/menuViews/recipesList")} />
        <LargeButton text="Vider le menu" icon="trash" type="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontFamily: "SN",
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginTop: 16,
  }
});
