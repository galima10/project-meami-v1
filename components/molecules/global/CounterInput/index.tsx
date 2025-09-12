import {
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import theme from "@themes/index";
import { useState } from "react";
import { globalStyles } from "@themes/styles";

export default function CounterInput({
  value,
  onChangeNumber,
}: {
  value: string;
  onChangeNumber: (value: string) => void;
}) {
  return (
      <TextInput
        style={[styles.input, globalStyles.littleShadow]}
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={value}
        maxLength={value.includes(".") ? 3 : 2}
        selection={{ start: value.length, end: value.length }}
        onBlur={() => {
          if (value === "" || isNaN(Number(value)) || Number(value) < 0) {
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
    fontWeight: theme.properties.medium,
    fontFamily: "SN",
    color: theme.properties.brown,
    fontSize: 16,
    width: 32,
    height: 40,
    textAlign: "center",
    marginHorizontal: 8,
  },
});
