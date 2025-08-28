import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { Link } from "expo-router";

export default function Infos() {
  return (
    <View style={styles.screen}>
      <AppText style={styles.text}>
        Informations utiles (conservation & cuisson)
      </AppText>
      <Link href={"/infosViews/storage"} asChild>
        <Pressable style={{ marginTop: 20 }}>
          <AppText>Conservation</AppText>
        </Pressable>
      </Link>
      <Link href={"/infosViews/cooking"} asChild>
        <Pressable style={{ marginTop: 20 }}>
          <AppText>Cuisson</AppText>
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
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
