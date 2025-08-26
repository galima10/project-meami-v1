import React from "react";
import { SvgProps } from "react-native-svg";
import SvgMenu from "./icons/SvgMenu";

type IconName = "menu";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

const ICONS: Record<IconName, React.FC<SvgProps>> = {
  menu: SvgMenu,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#000", ...props }) => {
  const SvgComponent = ICONS[name];

  if (!SvgComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <SvgComponent width={size} height={size} color={color} {...props} />;
};

export default Icon;