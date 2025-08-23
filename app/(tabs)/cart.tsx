import { Text, View, StyleSheet } from "react-native";

export default function Cart() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Liste de courses</Text>
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