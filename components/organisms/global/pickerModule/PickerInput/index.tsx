import { View, StyleSheet, Pressable } from "react-native";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import { useState } from "react";
import Icon from "@components/atoms/global/Icon";
import OptionsPicker from "../OptionsPicker";

export default function PickerInput() {
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const [items, setItems] = useState([
    { label: "Par catégorie" },
    { label: "Par ingrédient" },
    { label: "Par ordre alphabétique" },
    { label: "Par type" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.input,
            styles.picker,
            globalStyles.littleShadow,
            pressed && { opacity: 0.5 },
          ]}
          onPress={() => {
            setOpenPicker(!openPicker);
          }}
        >
          <AppText
            style={[
              styles.pickerTitle,
              selectedValue !== null && { opacity: 1 },
            ]}
          >
            {selectedValue ? selectedValue : "Choisir une option"}
          </AppText>
        </Pressable>
        <Icon
          name="sort"
          color={theme.properties.transparentBrown}
          size={16}
          style={styles.icon}
        />
      </View>
      <OptionsPicker
        visible={openPicker}
        setValue={setSelectedValue}
        setOpenPicker={setOpenPicker}
        selectedValue={selectedValue}
        items={items}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginRight: 16,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
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
    color: theme.properties.brown,
    opacity: 0.5,
  },
  icon: {
    position: "absolute",
    right: 8,
  },
});
