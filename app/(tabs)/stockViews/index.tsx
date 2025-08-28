import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { Link } from "expo-router";

export default function Stock() {
  return (
    <View style={styles.screen}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.properties.beige,
  },
  text: {
    fontFamily: "SN",
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
