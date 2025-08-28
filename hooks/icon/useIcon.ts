import { SvgProps } from "react-native-svg";
import SvgMenu from "@components/atoms/icons/tabBar/SvgMenu";
import SvgCart from "@components/atoms/icons/tabBar/SvgCart";
import SvgStock from "@components/atoms/icons/tabBar/SvgStock";
import SvgInfos from "@components/atoms/icons/tabBar/SvgInfos";
import SvgCalendar from "@components/atoms/icons/global/SvgCalendar";
import SvgList from "@components/atoms/icons/global/SvgList";
import SvgModify from "@components/atoms/icons/global/SvgModify";
import SvgValidate from "@components/atoms/icons/global/SvgValidate";
import SvgAdd from "@components/atoms/icons/global/SvgAdd";
import SvgReturn from "@components/atoms/icons/global/SvgReturn";
import SvgRecipes from "@components/atoms/icons/global/SvgRecipes";
import SvgIngredients from "@components/atoms/icons/global/SvgIngredients";

export type IconName = "menu" | "cart" | "infos" | "stock" | "calendar" | "list" | "modify" | "validate" | "add" | "return" | "recipes" | "ingredients" | string;

const ICONS: Record<IconName, React.FC<SvgProps & { withStroke?: boolean }>> = {
  menu: SvgMenu,
  cart: SvgCart,
  infos: SvgInfos,
  stock: SvgStock,
  calendar: SvgCalendar,
  list: SvgList,
  modify: SvgModify,
  validate: SvgValidate,
  add: SvgAdd,
  return: SvgReturn,
  recipes: SvgRecipes,
  ingredients: SvgIngredients
};


export function useIconComponent(name: IconName) {
  return ICONS[name];
}
