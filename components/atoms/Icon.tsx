import React from "react";
import { SvgProps } from "react-native-svg";
import { useIconComponent, IconName } from "@hooks/icon/useIcon";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#000", ...props }) => {
  const SvgComponent = useIconComponent(name);

  if (!SvgComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <SvgComponent width={size} height={size} color={color} {...props} />;
};

export default Icon;