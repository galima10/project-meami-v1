import { View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { Link } from "expo-router";

export default function Stock() {
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/stock_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <AppText style={styles.text}>Stock (recettes & ingrédients)</AppText>
      <Link href={"/stockViews/recipes"} asChild>
        <Pressable style={{ marginTop: 20 }}>
          <AppText>Recettes</AppText>
        </Pressable>
      </Link>
      <Link href={"/stockViews/ingredients"} asChild>
        <Pressable style={{ marginTop: 20 }}>
          <AppText>Ingrédients</AppText>
        </Pressable>
      </Link>
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
