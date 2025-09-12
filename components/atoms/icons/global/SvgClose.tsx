import * as React from "react";
import Svg, { Path, SvgProps, G, Defs, ClipPath } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

export default function SvgClose({
  color = "#000",
  withStroke,
  ...props
}: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <G clipPath="url(#clip0_429_4105)">
        <Path
          d="M84.784 14.784L15.216 84.353m0-69.569l69.568 69.569"
          stroke={color}
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_429_4105">
          <Path fill={color} d="M0 0H100V100H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
