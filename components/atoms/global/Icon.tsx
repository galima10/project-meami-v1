import { IconName, useIconComponent } from "@hooks/icon/useIcon";
import React from "react";
import { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
  withStroke?: boolean;
}
export default function Icon({
  name,
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  const SvgComponent = useIconComponent(name);

  if (!SvgComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <SvgComponent width={size} height={size} color={color} {...props} />;
}
