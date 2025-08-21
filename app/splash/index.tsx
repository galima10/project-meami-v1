import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import theme, { ThemeType } from "@themes/index";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/logo.png")} style={styles.icon} />
      <Text style={styles.title}>Ton meilleur ami pour cooky !</Text>
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
  },
  title: {
    paddingHorizontal: 50,
    textAlign: "center",
    lineHeight: 56,
    fontSize: 40,
    fontWeight: "bold",
    color: theme.properties.white,
    marginTop: 32,
  },
});
