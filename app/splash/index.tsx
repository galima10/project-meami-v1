import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import theme, { ThemeType } from "@themes/index";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import WaveText from "@components/atoms/WaveText";

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
      <View style={styles.titleContainer}>
        <WaveText text="Ton meilleur ami pour cooky !" style={styles.title} />
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
    width: 400,
    height: 400,
  },
  title: {
    textAlign: "center",
    // lineHeight: 56,
    fontSize: 32,
    fontWeight: "bold",
    color: theme.properties.beige,
  },
  titleContainer: {
    paddingHorizontal: 100,
    marginTop: 40,
  }
});
