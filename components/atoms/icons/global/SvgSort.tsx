import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

export default function SvgSort({
  color = "#000",
  withStroke,
  ...props
}: Props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <Path
        d="M45.556 65.89L27.778 83.666 10 65.89M27.777 83.667V17M90 70.334H67.778M90 48.11H58.89M90 25.89H45.555"
        stroke={color}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
