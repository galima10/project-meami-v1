import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { StyleSheet, View } from "react-native";
import AppButton from "@components/molecules/global/AppButton";
import MomentElement from "./MomentElement";

export default function DaySlide() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppButton icon="trash" type="secondary" iconSize={40} style={styles.trashButton} />
        <AppText style={styles.dayTitle}>Dimanche</AppText>
      </View>
      <MomentElement />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 60,
  },
  trashButton: {
    position: "absolute",
    left: 8,
    padding: 4,
  },
});
