import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { useLocalSearchParams } from "expo-router";

export default function ModifyView() {
  const { type, mode } = useLocalSearchParams<{
    type: string;
    mode?: string;
  }>();
  const isCreate = mode === "create";
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/stock_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <AppText style={styles.text}>
        {isCreate ? `Création d'un nouveau ${type}` : `Modification de ${type}`}
      </AppText>
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
