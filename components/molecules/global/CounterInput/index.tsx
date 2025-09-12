import { View, StyleSheet, TextInput } from "react-native";
import theme from "@themes/index";
import { useState } from "react";
import { globalStyles } from "@themes/styles";

export default function CounterInput() {
  const [number, onChangeNumber] = useState("10");
  return (
    <TextInput
      style={[styles.input, globalStyles.littleShadow]}
      keyboardType="numeric"
      value={number}
      onChangeText={onChangeNumber}
      maxLength={2}
      selection={{ start: number.length, end: number.length }}
      onBlur={() => {
        if (number === "") {
          onChangeNumber("0"); // remet 0 quand on quitte le champ et qu'il est vide
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: theme.properties.white,
    borderColor: theme.properties.whiteBorder,
    borderRadius: theme.properties.buttonRadius,
    fontFamily: "SN",
    color: theme.properties.brown,
    fontSize: 18,
    lineHeight: 16,
    width: 32,
    height: 40,
    textAlign: "center",
  },
});
