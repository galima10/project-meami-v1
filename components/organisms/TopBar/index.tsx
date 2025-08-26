import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import TopButton from "@components/molecules/TopButton";

const TopBar = () => {
  return (
    <>
      <View style={styles.container}>
        <TopButton routeName="menu" />
        <TopButton routeName="cart" />
        <Image
          source={require("@assets/images/precharged/logos/logo_text.png")}
          style={styles.logo}
        />
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
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default TopBar;
