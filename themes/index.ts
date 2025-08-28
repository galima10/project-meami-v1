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

    buttonRadius: 8,

    fontFamily: "SN",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",

    borderColor: "rgba(73, 27, 30, 0.25)",

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
  lightOrange: string;
  lightRed: string;
  lightGreen: string;
  lightYellow: string;
  lightPurple: string;
  lightPink: string;
  vibrantBeige: string;
  vibrantOrange: string;
  vibrantRed: string;
  vibrantGreen: string;
  vibrantYellow: string;
  vibrantPurple: string;
  vibrantPink: string;
  buttonRadius: number;
  fontFamily: string;
  regular: FontWeightType;
  medium: FontWeightType;
  semibold: FontWeightType;
  bold: FontWeightType;
  borderColor: string;
  // inputColor: string;
  // gray: string;
}

type FontWeightType =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export default theme;
