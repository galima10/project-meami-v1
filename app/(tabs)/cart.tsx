import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";

export default function Cart() {
  return (
    <View style={styles.screen}>
      <AppText style={styles.text}>Liste de courses</AppText>
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
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});