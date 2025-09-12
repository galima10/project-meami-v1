import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

export default function SvgSearch({
  color = "#000",
  withStroke,
  ...props
}: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        d="M65.88 70.124c-5.916 4.952-13.536 7.94-21.844 7.94C25.248 78.064 10 62.816 10 44.032S25.248 10 44.036 10c18.78 0 34.032 15.248 34.032 34.032a33.903 33.903 0 01-7.94 21.844l18.996 19c.584.584.876 1.352.876 2.124 0 2.348-2.148 3-3 3a2.992 2.992 0 01-2.124-.88L65.88 70.124zm-21.844-54.12c-15.472 0-28.028 12.56-28.028 28.028 0 15.468 12.556 28.028 28.028 28.028 15.464 0 28.028-12.56 28.028-28.028 0-15.468-12.564-28.028-28.028-28.028z"
        fill={color}
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}
