// styles.ts
import { StyleSheet } from "react-native";
import theme from "./index";

export const globalStyles = StyleSheet.create({
  buttonBase: {
    padding: 8,
    borderRadius: theme.properties.buttonRadius,
    alignItems: "center",
  },
  littleShadow: {
    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)",
  },
  bigShadow: {
    boxShadow: "-3px 3px 15px rgba(0, 0, 0, 0.25)",
  }
});

export const tabBarStyles = StyleSheet.create({
  active: {
    opacity: 1,
    borderColor: theme.properties.borderColor,
    borderWidth: 1,
  },
});