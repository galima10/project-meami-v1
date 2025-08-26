import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue };

function SvgInfos({ color = "#000", ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        d="M66.328 55.484C70.156 51.437 72.5 46 72.5 40c0-12.422-10.078-22.5-22.5-22.5S27.5 27.578 27.5 40c0 6 2.344 11.438 6.172 15.484C37 58.984 40.688 63.922 42 70h16c1.313-6.094 5-11.016 8.328-14.516zm5.438 5.157C68.078 64.53 65 69.28 65 74.64V77.5C65 84.406 59.406 90 52.5 90h-5C40.594 90 35 84.406 35 77.5v-2.86c0-5.359-3.078-10.109-6.766-14A29.85 29.85 0 0120 40c0-16.563 13.438-30 30-30 16.563 0 30 13.438 30 30 0 8-3.125 15.266-8.234 20.64zM42.5 38.75a3.741 3.741 0 01-3.75 3.75A3.741 3.741 0 0135 38.75C35 31.156 41.156 25 48.75 25a3.741 3.741 0 013.75 3.75 3.741 3.741 0 01-3.75 3.75 6.248 6.248 0 00-6.25 6.25z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgInfos;
