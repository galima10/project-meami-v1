import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@hooks/useTheme";

export default function Splash() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcomeddd to My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
