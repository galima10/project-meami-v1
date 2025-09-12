import { View, StyleSheet } from "react-native";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";
import InputBar from "@components/molecules/global/InputBar";

export default function AddPanelHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBarContainer}>
        <InputBar />
        <AppButton icon="switch" iconSize={24} style={styles.switchButton} />
      </View>
      <AppButton icon="close" iconSize={24} style={styles.closeButton} red />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBarContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 24,
  },
  closeButton: {
    padding: 8,
    borderRadius: theme.properties.buttonRadius,
    marginLeft: 24,
  },
  switchButton: {
    padding: 4,
    borderRadius: theme.properties.buttonRadius,
  },
});
