import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import type { ColorValue } from "react-native";

type Props = SvgProps & { color?: ColorValue; withStroke?: boolean };

function SvgReturn({ color = "#000", withStroke, ...props }: Props) {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      {withStroke && (
        <>
          <Path
            d="M56.928 89.202c45.088-27.152 10.43-68.882-22.005-51.616l5.913 9.664-29.32-7.856L19.2 10.718l5.272 9.07c58.974-29.554 95.403 49.785 32.456 69.414z"
            fill="#491b1e40"
            stroke="#491b1e40"
            strokeWidth={1.5}
            transform="translate(50 50) scale(1.08) translate(-50 -50)"
          />
          <Path
            d="M56.928 89.202c45.088-27.152 10.43-68.882-22.005-51.616l5.913 9.664-29.32-7.856L19.2 10.718l5.272 9.07c58.974-29.554 95.403 49.785 32.456 69.414z"
            fill="#491b1e40"
            stroke="#491b1e40"
            strokeWidth={1.5}
            transform="translate(50 50) scale(0.9) translate(-50 -50)"
          />
        </>
      )}
      <Path
        d="M56.928 89.202c45.088-27.152 10.43-68.882-22.005-51.616l5.913 9.664-29.32-7.856L19.2 10.718l5.272 9.07c58.974-29.554 95.403 49.785 32.456 69.414z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgReturn;
