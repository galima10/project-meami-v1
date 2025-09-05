import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

export default function SvgTrash({
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
        d="M25 90c-2.75 0-5.104-.87-7.063-2.611C15.98 85.649 15 83.556 15 81.11V23.333h-5v-8.889h25V10h30v4.444h25v8.89h-5V81.11c0 2.445-.98 4.537-2.938 6.278C80.105 89.129 77.75 90 75 90H25zm50-66.667H25v57.778h50V23.333zm-40 48.89h10v-40H35v40zm20 0h10v-40H55v40z"
        fill={color}
      />
    </Svg>
  );
}
