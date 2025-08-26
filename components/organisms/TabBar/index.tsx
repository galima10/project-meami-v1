import TabButton from "@components/molecules/TabButton";
import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

const TabBar = () => {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <TabButton routeName="menu" label="Menu" />
      <TabButton routeName="cart" label="Courses" />
      <TabButton routeName="stock" label="Stock" />
      <TabButton routeName="infos" label="Infos" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: theme.properties.beige,
    borderColor: theme.properties.borderColor,
    borderWidth: 1,
  },
});

export default TabBar;
