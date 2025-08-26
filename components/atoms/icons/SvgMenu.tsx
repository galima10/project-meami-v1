import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue };

function SvgMenu({ color = "#000", ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <Path
        d="M56.25 25h-12.5A3.741 3.741 0 0140 21.25a3.741 3.741 0 013.75-3.75h12.5A3.741 3.741 0 0160 21.25 3.741 3.741 0 0156.25 25zm0 7.5c5.797 0 10.563-4.375 11.188-10H70c1.375 0 2.5 1.125 2.5 2.5v55c0 1.375-1.125 2.5-2.5 2.5H30a2.507 2.507 0 01-2.5-2.5V25c0-1.375 1.125-2.5 2.5-2.5h2.563c.624 5.625 5.39 10 11.187 10h12.5zM65.61 15a11.234 11.234 0 00-9.36-5h-12.5a11.234 11.234 0 00-9.36 5H30c-5.516 0-10 4.484-10 10v55c0 5.516 4.484 10 10 10h40c5.516 0 10-4.484 10-10V25c0-5.516-4.484-10-10-10h-4.39z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgMenu;
