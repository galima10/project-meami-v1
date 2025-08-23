import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Menu de la semaine</Text>
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
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
