import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import AddPanelHeader from "../AddPanelHeader";

export default function AddPanel() {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AddPanelHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    backgroundColor: theme.properties.beige,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    borderRadius: 16,
  },
});
