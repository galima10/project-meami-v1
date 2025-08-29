import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue };

export default function SvgStock({ color = "#000", ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.333 87L20 71.746V58.45l18 10.5 10.333-11.456V87zm3.334-.003v-29.62l10.54 11.244L80 58.671v13.075l-28.333 15.25zM17.203 52.94L10 48.756l10-11.107-10-9.496L39.06 13l10.717 8.022L60.86 13 90 28.341l-9.983 9.321L90 49.243l-7.473 4.174L62.85 64.413l-11.16-11.91 24.72-13.327L50.003 24.47l-26.41 14.706 24.74 13.242v.081l-10.99 12.183L20 54.565l-.533-.31-2.264-1.322v.007z"
        fill={color}
      />
    </Svg>
  );
}
