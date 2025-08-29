import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

export default function SvgValidate({ color = "#000", withStroke, ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      {withStroke && (
        <>
          <Path
            d="M90 22L35 77 10 52"
            stroke="#491b1e40"
            strokeWidth={12}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(50 50) scale(1.08) translate(-50 -50)"
          />
          <Path
            d="M90 22L35 77 10 52"
            stroke="#491b1e40"
            strokeWidth={12}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(50 50) scale(0.9) translate(-50 -50)"
          />
        </>
      )}
      <Path
        d="M90 22L35 77 10 52"
        stroke={color}
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
