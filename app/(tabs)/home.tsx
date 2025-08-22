import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SN",
    fontWeight: "700",
  },
});
