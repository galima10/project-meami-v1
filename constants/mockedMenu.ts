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
