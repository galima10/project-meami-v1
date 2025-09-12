export const mockedMenu: Record<
  string,
  {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  }
> = {
  lundi: {
    matin: [
      {
        name: "Pancakes",
        type: "petit-dejeuner ",
      },
      {
        name: "Omelette",
        type: "petit-dejeuner ",
      },
      {
        name: "Smoothie",
        type: "petit-dejeuner ",
      },
    ],
    midi: [
      {
        name: "Poulet rôti",
        type: "plat principal",
      },
      {
        name: "Légumes grillés",
        type: "légumes",
      },
      {
        name: "Pâtes à la sauce tomate",
        type: "accompagnement",
      },
      {
        name: "Tarte aux pommes",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Tacos",
        type: "plat principal",
      },
      {
        name: "Salade verte",
        type: "légumes",
      },
      {
        name: "Riz pilaf",
        type: "accompagnement",
      },
      {
        name: "Crêpes",
        type: "dessert",
      },
    ],
  },
  mardi: {
    matin: [
      {
        name: "Yaourt avec granola",
        type: "petit-dejeuner ",
      },
      {
        name: "Fruits frais",
        type: "petit-dejeuner ",
      },
    ],
    midi: [
      {
        name: "Salade César",
        type: "plat principal",
      },
      {
        name: "Soupe de légumes",
        type: "légumes",
      },
      {
        name: "Yaourt",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Tacos",
        type: "plat principal",
      },
      {
        name: "Salade verte",
        type: "légumes",
      },
      {
        name: "Riz pilaf",
        type: "accompagnement",
      },
      {
        name: "Crêpes",
        type: "dessert",
      },
    ],
  },
  mercredi: {
    matin: [
      {
        name: "Yaourt avec granola",
        type: "petit-dejeuner ",
      },
      {
        name: "Fruits frais",
        type: "petit-dejeuner ",
      },
    ],
    midi: [
      {
        name: "Salade César",
        type: "plat principal",
      },
      {
        name: "Soupe de légumes",
        type: "légumes",
      },
      {
        name: "Yaourt",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Tacos",
        type: "plat principal",
      },
      {
        name: "Salade verte",
        type: "légumes",
      },
      {
        name: "Riz pilaf",
        type: "accompagnement",
      },
      {
        name: "Crêpes",
        type: "dessert",
      },
    ],
  },
  jeudi: {
    matin: [
      {
        name: "Yaourt avec granola",
        type: "petit-dejeuner ",
      },
      {
        name: "Fruits frais",
        type: "petit-dejeuner ",
      },
    ],
    midi: [
      {
        name: "Salade César",
        type: "plat principal",
      },
      {
        name: "Fruits frais",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Poulet rôti",
        type: "plat principal",
      },
      {
        name: "Légumes grillés",
        type: "légumes",
      },
      {
        name: "Pâtes à la sauce tomate",
        type: "accompagnement",
      },
      {
        name: "Tarte aux pommes",
        type: "dessert",
      },
    ],
  },
  vendredi: {
    matin: [
      {
        name: "Pancakes",
        type: "petit-dejeuner ",
      },
      {
        name: "Omelette",
        type: "petit-dejeuner",
      },
    ],
    midi: [
      {
        name: "Quiche Lorraine",
        type: "plat principal",
      },
      {
        name: "Ratatouille",
        type: "légumes",
      },
      {
        name: "Salade de fruits",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Tacos",
        type: "plat principal",
      },
      {
        name: "Salade verte",
        type: "légumes",
      },
      {
        name: "Riz pilaf",
        type: "accompagnement",
      },
      {
        name: "Crêpes",
        type: "dessert",
      },
    ],
  },
  samedi: {
    matin: [
      {
        name: "Pancakes",
        type: "petit-dejeuner ",
      },
      {
        name: "Omelette",
        type: "petit-dejeuner ",
      },
      {
        name: "Smoothie",
        type: "petit-dejeuner ",
      },
    ],
    midi: [
      {
        name: "Poulet rôti",
        type: "plat principal",
      },
      {
        name: "Frites maison",
        type: "accompagnement",
      },
    ],
    soir: [
      {
        name: "Sandwichs variés",
        type: "plat principal",
      },
      {
        name: "Chips",
        type: "accompagnement",
      },
    ],
  },
  dimanche: {
    matin: [
      {
        name: "Pancakes",
        type: "petit-dejeuner",
      },
    ],
    midi: [
      {
        name: "Côte de bœuf",
        type: "plat principal",
      },
      {
        name: "Pommes de terre sautées",
        type: "accompagnement",
      },
      {
        name: "Haricots verts",
        type: "légumes",
      },
      {
        name: "Tarte aux pommes",
        type: "dessert",
      },
    ],
    soir: [
      {
        name: "Soupe à l'oignon",
        type: "plat principal",
      },
      {
        name: "Fromage",
        type: "accompagnement",
      },
    ],
  },
};

export const mockedMenuEmpty: Record<
  string,
  {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  }
> = {
  lundi: {
    matin: [],
    midi: [],
    soir: [],
  },
  mardi: {
    matin: [],
    midi: [],
    soir: [],
  },
  mercredi: {
    matin: [],
    midi: [],
    soir: [],
  },
  jeudi: {
    matin: [],
    midi: [],
    soir: [],
  },
  vendredi: {
    matin: [],
    midi: [],
    soir: [],
  },
  samedi: {
    matin: [],
    midi: [],
    soir: [],
  },
  dimanche: {
    matin: [],
    midi: [],
    soir: [],
  },
};

export const mockedRecipeList: Array<{
  id: number;
  name: string;
  type: string;
  image: any;
  number: number;
}> = [
  {
    id: 1,
    name: "Pâtes asperges au citron",
    type: "meats",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 1,
  },
  {
    id: 2,
    name: "Pâtes asperges au citron",
    type: "vegetables",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 8,
  },
  {
    id: 3,
    name: "Pâtes asperges au citron",
    type: "vegetables",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 2,
  },
  {
    id: 4,
    name: "Pâtes asperges au citron",
    type: "vegetables",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 6,
  },
  {
    id: 5,
    name: "Pâtes asperges au citron",
    type: "vegetables",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 7,
  },
  {
    id: 6,
    name: "Pâtes asperges au citron",
    type: "meats",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 3,
  },
  {
    id: 7,
    name: "Pâtes asperges au citron",
    type: "desserts",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 9,
  },
  {
    id: 8,
    name: "Pâtes asperges au citron",
    type: "desserts",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 7,
  },
  {
    id: 9,
    name: "Pâtes asperges au citron",
    type: "meats",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 5,
  },
  {
    id: 10,
    name: "Pâtes asperges au citron",
    type: "accompaniments",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 3,
  },
  {
    id: 11,
    name: "Pâtes asperges au citron",
    type: "meats",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 2,
  },
  {
    id: 12,
    name: "Pâtes asperges au citron",
    type: "breakfast",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 2,
  },
  {
    id: 13,
    name: "Pâtes asperges au citron",
    type: "meats",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 4,
  },
  {
    id: 14,
    name: "Pâtes asperges au citron",
    type: "breakfast",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 1,
  },
  {
    id: 15,
    name: "Pâtes asperges au citron",
    type: "breakfast",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 5,
  },
  {
    id: 16,
    name: "Pâtes asperges au citron",
    type: "ingredients",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 9,
  },
  {
    id: 17,
    name: "Pâtes asperges au citron",
    type: "ingredients",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 2,
  },
  {
    id: 18,
    name: "Pâtes asperges au citron",
    type: "ingredients",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 6,
  },
  {
    id: 19,
    name: "Pâtes asperges au citron",
    type: "ingredients",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 7,
  },
  {
    id: 20,
    name: "Pâtes asperges au citron",
    type: "ingredients",
    image: require("@assets/images/requires/ingredient_recipe_3x.png"),
    number: 2,
  },
]