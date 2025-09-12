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
  },
  buttonGreen: {
    backgroundColor: theme.properties.darkGreen,
    borderColor: theme.properties.greenBorder,
    borderWidth: 1.5,
  },
  buttonGreenPressed: {
    backgroundColor: theme.properties.lightGreen,
    borderColor: theme.properties.lightGreenBorder,
    borderWidth: 1.5,
  },
  buttonRed: {
    backgroundColor: theme.properties.darkRed,
    borderColor: theme.properties.redBorder,
    borderWidth: 1.5,
  },
  buttonRedPressed: {
    backgroundColor: theme.properties.lightRed,
    borderColor: theme.properties.lightRedBorder,
    borderWidth: 1.5,
  },
  buttonOrange: {
    backgroundColor: theme.properties.darkOrange,
    borderColor: theme.properties.orangeBorder,
    borderWidth: 1.5,
  },
  buttonOrangePressed: {
    backgroundColor: theme.properties.lightOrange,
    borderColor: theme.properties.lightOrangeBorder,
    borderWidth: 1.5,
  },
});

export const tabBarStyles = StyleSheet.create({
  active: {
    opacity: 1,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
  },
});

export const topBarStyles = StyleSheet.create({
  active: {
    opacity: 1,
    backgroundColor: theme.properties.lightOrange,
    borderColor: theme.properties.orangeBorder,
    borderWidth: 1,
  },
  greenActive: {
    opacity: 1,
    backgroundColor: theme.properties.lightGreen,
  },
  greenButton: {
    opacity: 1,
    backgroundColor: theme.properties.darkGreen,
    borderColor: theme.properties.greenBorder,
    borderWidth: 1.5,
  }
});