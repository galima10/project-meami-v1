import { Text, View, StyleSheet } from "react-native";

export default function Infos() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Informations utiles (conservation & cuisson)</Text>
    </View>
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
    fontWeight: "700",
    fontSize: 24,
  },
});