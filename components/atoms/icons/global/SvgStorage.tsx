import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

function SvgStorage({ color = "#000", withStroke, ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      {withStroke && (
        <>
          <Path
            d="M83 10H16.333A3.333 3.333 0 0013 13.333v73.334a3.333 3.333 0 106.667 0v-3.334h60v3.334a3.333 3.333 0 106.666 0V13.333A3.333 3.333 0 0083 10zm-3.333 66.667H53v-60h26.667v60zm-60-60h26.666v60H19.667v-60z"
            fill="#491b1e40"
            transform="translate(50 50) scale(1.08) translate(-50 -50)"
          />
          <Path
            d="M36.333 40A3.333 3.333 0 0033 43.333v10a3.333 3.333 0 106.667 0v-10A3.333 3.333 0 0036.333 40zM63.001 56.667a3.333 3.333 0 003.334-3.334v-10a3.333 3.333 0 00-6.667 0v10a3.333 3.333 0 003.333 3.334z"
            fill="#491b1e40"
            transform="translate(50 50) scale(1.08) translate(-50 -50)"
          />

          <Path
            d="M83 10H16.333A3.333 3.333 0 0013 13.333v73.334a3.333 3.333 0 106.667 0v-3.334h60v3.334a3.333 3.333 0 106.666 0V13.333A3.333 3.333 0 0083 10zm-3.333 66.667H53v-60h26.667v60zm-60-60h26.666v60H19.667v-60z"
            fill="#491b1e40"
            transform="translate(50 50) scale(0.9) translate(-50 -50)"
          />
          <Path
            d="M36.333 40A3.333 3.333 0 0033 43.333v10a3.333 3.333 0 106.667 0v-10A3.333 3.333 0 0036.333 40zM63.001 56.667a3.333 3.333 0 003.334-3.334v-10a3.333 3.333 0 00-6.667 0v10a3.333 3.333 0 003.333 3.334z"
            fill="#491b1e40"
            transform="translate(50 50) scale(0.9) translate(-50 -50)"
          />
        </>
      )}
      <Path
        d="M83 10H16.333A3.333 3.333 0 0013 13.333v73.334a3.333 3.333 0 106.667 0v-3.334h60v3.334a3.333 3.333 0 106.666 0V13.333A3.333 3.333 0 0083 10zm-3.333 66.667H53v-60h26.667v60zm-60-60h26.666v60H19.667v-60z"
        fill={color}
      />
      <Path
        d="M36.333 40A3.333 3.333 0 0033 43.333v10a3.333 3.333 0 106.667 0v-10A3.333 3.333 0 0036.333 40zM63.001 56.667a3.333 3.333 0 003.334-3.334v-10a3.333 3.333 0 00-6.667 0v10a3.333 3.333 0 003.333 3.334z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgStorage;
