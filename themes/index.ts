import { StyleProp } from "react-native";

const theme = {
  name: "light",
  properties: {
    beige: "#FFF6E6",

    darkOrange: "#E09873",

    brown: "#491B1E",
    white: "#FFFFFF",

    darkRed: "#B23E5B",
    darkGreen: "#929E6D",
    darkYellow: "#F3D55F",
    darkPurple: "#8983D7",
    darkPink: "#E68FBC",

    lightOrange: "#EEAA83",
    lightRed: "#D45068",
    lightGreen: "#B8C990",
    lightYellow: "#FFE992",
    lightPurple: "#A39EE3",
    lightPink: "#F2B8DD",

    vibrantOrange: "#ED8C37",
    vibrantRed: "#C82807",
    vibrantGreen: "#8EA604",
    vibrantYellow: "#FFED26",
    vibrantPurple: "#663CE1",
    vibrantPink: "#FF7B9C",
    vibrantBeige: "#FFEAC3",

    filterShadow: {
      shadowColor: "#000",
      shadowOffset: {
        x: 0,
        y: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },

    borderRadius: 10,

    // active: "#000000",
    // iconActive: "#ffffff",
    // iconInactive: "gray",
    // danger: "#FED7E3",
    // success: "#42CD00",
  } as ThemeType,
};

export interface ThemeType {
  beige: string;
  darkOrange: string;
  brown: string;
  white: string;
  darkRed: string;
  darkGreen: string;
  darkYellow: string;
  darkPurple: string;
  darkPink: string;
  vibrantBeige: string;
  vibrantOrange: string;
  vibrantRed: string;
  vibrantGreen: string;
  vibrantYellow: string;
  vibrantPurple: string;
  vibrantPink: string;
  borderRadius: number;
  filterShadow: {
    shadowColor: string;
    shadowOffset: {
      x: number;
      y: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
  };
  // inputColor: string;
  // gray: string;
}

export default theme;