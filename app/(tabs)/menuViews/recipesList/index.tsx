import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import LargeButton from "@components/molecules/global/LargeButton";
import { mockedMenu } from "@constants/mockedMenu";
import { useMenu } from "@contexts/MenuContext";

export default function RecipesListView() {
  const { setMenu } = useMenu();
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/recipes_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <AppText style={styles.text}>
        Menu de la semaine Vue liste des recettes
      </AppText>
      <LargeButton
        action={() => setMenu(mockedMenu)}
        text="Ajouter des recettes"
        style={{ marginTop: 20 }}
      />
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
