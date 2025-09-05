import { useState } from "react";
import theme from "@themes/index";

export function useLargeButton(type: "primary" | "secondary") {
  const [isPressed, setIsPressed] = useState(false);
  const [secondaryColor, setSecondaryColor] = useState(
    theme.properties.darkRed
  );

  const handlePressIn = () => {
    setIsPressed(true);
    if (type === "secondary") setSecondaryColor(theme.properties.lightRed);
  };
  const handlePressOut = () => {
    setIsPressed(false);
    if (type === "secondary") setSecondaryColor(theme.properties.darkRed);
  };
  return { handlePressIn, handlePressOut, secondaryColor, isPressed };
}
