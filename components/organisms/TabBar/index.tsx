import TabButton from "@components/molecules/TabButton";
import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

const TabBar = () => {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <TabButton routeName="menuViews/calendar" label="Menu" icon="menu" />
      <TabButton routeName="cartViews/list" label="Courses" icon="cart" />
      <TabButton routeName="stockViews/index" label="Stock" icon="stock" />
      <TabButton routeName="infosViews/index" label="Infos" icon="infos" />
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
