import { SvgProps } from "react-native-svg";
import SvgMenu from "@components/atoms/icons/tabBar/SvgMenu";
import SvgCart from "@components/atoms/icons/tabBar/SvgCart";
import SvgStock from "@components/atoms/icons/tabBar/SvgStock";
import SvgInfos from "@components/atoms/icons/tabBar/SvgInfos";

export type IconName = "menu" | "cart" | "infos" | "stock";

const ICONS: Record<IconName, React.FC<SvgProps>> = {
  menu: SvgMenu,
  cart: SvgCart,
  infos: SvgInfos,
  stock: SvgStock,
};

export function useIconComponent(name: IconName) {
  return ICONS[name];
}