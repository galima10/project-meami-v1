import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useTheme } from "@hooks/useTheme";
import theme from "@themes/index";

export default function Splash() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@assets/images/logo.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.properties.darkOrange,
  },
  icon: {
    width: 500,
    height: 500,
    borderRadius: "80%",
  },
});
