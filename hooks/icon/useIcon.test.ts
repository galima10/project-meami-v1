import SvgMenu from "@components/atoms/icons/tabBar/SvgMenu";
import { useIconComponent } from "@hooks/icon/useIcon";

describe("useIconComponent", () => {
  it("retourne le bon composant pour 'menu'", () => {
    expect(useIconComponent("menu")).toBe(SvgMenu);
  });
});