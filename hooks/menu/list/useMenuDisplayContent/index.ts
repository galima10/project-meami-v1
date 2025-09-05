export function useMenuDisplayContent(
  momentSelected: string,
  menu: {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  }
) {
  const momentMap: Record<string, string> = {
    morning: "matin",
    noon: "midi",
    evening: "soir",
  };

  const momentKey = momentMap[momentSelected] as keyof typeof menu;
  const meals = menu[momentKey] || [];

  const petitDej = meals.filter(
    (meal) => meal.type.trim() === "petit-dejeuner"
  );
  const platsPrincipaux = meals.filter(
    (meal) => meal.type.trim() === "plat principal"
  );
  const legumesAccompagnements = meals.filter(
    (meal) =>
      meal.type.trim() === "légumes" || meal.type.trim() === "accompagnement"
  );
  const desserts = meals.filter((meal) => meal.type.trim() === "dessert");

  const lengthMenu = meals.length;

  return {
    petitDej,
    platsPrincipaux,
    legumesAccompagnements,
    desserts,
    lengthMenu
  };
}
