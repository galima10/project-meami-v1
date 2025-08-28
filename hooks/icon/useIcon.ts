import { SvgProps } from "react-native-svg";
import SvgMenu from "@components/atoms/icons/tabBar/SvgMenu";
import SvgCart from "@components/atoms/icons/tabBar/SvgCart";
import SvgStock from "@components/atoms/icons/tabBar/SvgStock";
import SvgInfos from "@components/atoms/icons/tabBar/SvgInfos";
import SvgCalendar from "@components/atoms/icons/tabBar/SvgCalendar";
import SvgList from "@components/atoms/icons/tabBar/SvgList";
import SvgModify from "@components/atoms/icons/tabBar/SvgModify";

export type IconName = "menu" | "cart" | "infos" | "stock" | "calendar" | "list" | "modify";

const ICONS: Record<IconName, React.FC<SvgProps>> = {
  menu: SvgMenu,
  cart: SvgCart,
  infos: SvgInfos,
  stock: SvgStock,
  calendar: SvgCalendar,
  list: SvgList,
  modify: SvgModify
};

export function useIconComponent(name: IconName) {
  return ICONS[name];
}
