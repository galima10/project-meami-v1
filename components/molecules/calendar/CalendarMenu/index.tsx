import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";

export default function CalendarMenu() {
  return (
    <View style={styles.container}>
      <AppText>Texte</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
