import { View, StyleSheet, TextInput } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import Icon from "@components/atoms/global/Icon";
import { useState } from "react";

export default function InputBar() {
  const [searchText, onChangeSearchText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.search, globalStyles.littleShadow]}
        placeholder="Rechercher..."
        placeholderTextColor={theme.properties.transparentBrown}
        value={searchText}
        onChangeText={onChangeSearchText}
        keyboardType="default"
      />

      {searchText === "" && (
        <Icon
          name="search"
          color={theme.properties.transparentBrown}
          size={16}
          style={styles.icon}
        />
      )}
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
  search: {
    fontSize: 16,
    lineHeight: 16,
    textAlignVertical: "center",
    fontFamily: "SN",
  },
  icon: {
    position: "absolute",
    right: 8,
  },
});
