import { View, StyleSheet, Pressable } from "react-native";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import { useState } from "react";

export default function PickerSorter() {
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ]);
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.input,
          styles.picker,
          globalStyles.littleShadow,
          pressed && { opacity: 0.5 },
        ]}
        onPress={() => {}}
      >
        <AppText style={styles.pickerTitle}>Choisir une option</AppText>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 32,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.properties.white,
    marginRight: 16,
  },
  input: {
    backgroundColor: theme.properties.white,
    borderRadius: 100,
    height: 32,
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 8,
    borderColor: theme.properties.whiteBorder,
    borderWidth: 1,
  },
  picker: {
    justifyContent: "center",
  },
  pickerTitle: {
    fontSize: 16,
    lineHeight: 16,
    color: theme.properties.transparentBrown,
  },
});
