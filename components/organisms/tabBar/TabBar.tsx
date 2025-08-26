import TabButton from "@components/molecules/tabBar/TabButton";
import { View, StyleSheet } from "react-native";
import theme from "@themes/index";

const TabBar = () => {
  return (
    <View style={styles.container}>
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
    padding: 12,
    backgroundColor: theme.properties.beige,
  },
});

export default TabBar;
