import { useIconComponent } from "@hooks/icon/useIcon";
import SvgMenu from "@components/atoms/icons/SvgMenu";

describe("useIconComponent", () => {
  it("retourne le bon composant pour 'menu'", () => {
    expect(useIconComponent("menu")).toBe(SvgMenu);
  });
});