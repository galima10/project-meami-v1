import { SvgProps } from "react-native-svg";
import SvgMenu from "@components/atoms/icons/SvgMenu";

export type IconName = "menu";

const ICONS: Record<IconName, React.FC<SvgProps>> = {
  menu: SvgMenu,
};

export function useIconComponent(name: IconName) {
  return ICONS[name];
}