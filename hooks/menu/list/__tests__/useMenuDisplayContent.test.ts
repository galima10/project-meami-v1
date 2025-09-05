import { useMenuDisplayContent } from "../useMenuDisplayContent";

describe("useMenuDisplayContent", () => {
  const fakeMenu = {
    matin: [
      { name: "Café", type: "petit-dejeuner" },
      { name: "Croissant", type: "petit-dejeuner" },
    ],
    midi: [
      { name: "Poulet rôti", type: "plat principal" },
      { name: "Haricots verts", type: "légumes" },
      { name: "Riz", type: "accompagnement" },
      { name: "Tarte aux pommes", type: "dessert" },
    ],
    soir: [
      { name: "Soupe", type: "plat principal" },
      { name: "Salade", type: "accompagnement" },
    ],
  };

  it("retourne les bons plats pour le matin", () => {
    const { petitDej, platsPrincipaux, legumesAccompagnements, desserts, lengthMenu } =
      useMenuDisplayContent("morning", fakeMenu);

    expect(petitDej).toHaveLength(2);
    expect(platsPrincipaux).toHaveLength(0);
    expect(legumesAccompagnements).toHaveLength(0);
    expect(desserts).toHaveLength(0);
    expect(lengthMenu).toBe(2);
  });

  it("retourne les bons plats pour le midi", () => {
    const { petitDej, platsPrincipaux, legumesAccompagnements, desserts, lengthMenu } =
      useMenuDisplayContent("noon", fakeMenu);

    expect(petitDej).toHaveLength(0);
    expect(platsPrincipaux[0].name).toBe("Poulet rôti");
    expect(legumesAccompagnements.map((m) => m.name)).toEqual([
      "Haricots verts",
      "Riz",
    ]);
    expect(desserts[0].name).toBe("Tarte aux pommes");
    expect(lengthMenu).toBe(4);
  });

  it("retourne les bons plats pour le soir", () => {
    const { platsPrincipaux, legumesAccompagnements, lengthMenu } =
      useMenuDisplayContent("evening", fakeMenu);

    expect(platsPrincipaux[0].name).toBe("Soupe");
    expect(legumesAccompagnements[0].name).toBe("Salade");
    expect(lengthMenu).toBe(2);
  });

  it("retourne des listes vides si moment inconnu", () => {
    const { petitDej, platsPrincipaux, legumesAccompagnements, desserts, lengthMenu } =
      useMenuDisplayContent("random", fakeMenu);

    expect(petitDej).toEqual([]);
    expect(platsPrincipaux).toEqual([]);
    expect(legumesAccompagnements).toEqual([]);
    expect(desserts).toEqual([]);
    expect(lengthMenu).toBe(0);
  });
});
