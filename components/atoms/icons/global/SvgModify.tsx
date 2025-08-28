import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue };

function SvgModify({ color = "#000", ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        d="M46.876 25C48.534 25 50 26.467 50 28.125c0 1.725-1.4 3.125-3.125 3.125H14.584v50h70.833V44.792a3.126 3.126 0 016.25 0v38.541c0 2.588-2.175 4.167-4.166 4.167h-75c-2 0-4.167-1.58-4.167-4.167V29.167c0-2.004 1.583-4.167 4.167-4.167h34.375zm-8.38 27.192c-4.354 12.512-5.158 14.375-5.158 16 0 1.837 1.604 2.608 2.613 2.608 1.133 0 4.616-1.254 15.954-5.204L38.496 52.192zm3.7-3.704l13.417 13.416 35.034-35a3.488 3.488 0 000-4.93c-2.417-2.407-6.076-6.07-8.496-8.482a3.474 3.474 0 00-2.463-1.021c-.887 0-1.783.342-2.466 1.02L42.197 48.489z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgModify;
