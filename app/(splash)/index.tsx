import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import theme, { ThemeType } from "@themes/index";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import WaveText from "@components/atoms/animated/WaveText";
import BounceSpring from "@components/atoms/animated/BounceSpring";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/menu");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={require("@assets/images/logo.png")} style={styles.icon} /> */}
      
      <BounceSpring>
        <Image source={require("@assets/images/precharged/logos/logo.png")} style={styles.icon} />
      </BounceSpring>
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
    width: 300,
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: theme.properties.beige,
    fontFamily: "SN",
    fontWeight: "700",
  },
  titleContainer: {
    paddingHorizontal: 50,
    marginTop: 40,
  }
});
