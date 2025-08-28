import { View, StyleSheet } from "react-native";
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
    <View style={styles.screen}>
      <AppText style={styles.text}>
        {isCreate ? `Création d'un nouveau ${type}` : `Modification de ${type}`}
      </AppText>
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
