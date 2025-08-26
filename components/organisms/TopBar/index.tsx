import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import TopButton from "@components/molecules/TopButton";
import { PropsWithChildren } from "react";

const TopBar = ({children} : PropsWithChildren) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("@assets/images/precharged/logos/logo_text.png")}
          style={styles.logo}
        />
        <View >
            {children}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.properties.darkOrange,
    position: "relative",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default TopBar;
