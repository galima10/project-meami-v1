import theme from "@themes/index";

export const recipeTypes: Record<
  string,
  {
    title: string;
    imageSource?: any;
    color: {
      text?: string;
      normal: { background: string; border: string };
      pressed: { background: string; border: string };
    };
  }
> = {
  meats: {
    title: "Plat principal",
    imageSource: require("@assets/images/precharged/illustrations/recipesTypes/meats_3x.jpg"),
    color: {
      text: theme.properties.white,
      normal: {
        background: theme.properties.darkRed,
        border: theme.properties.redBorder,
      },
      pressed: {
        background: theme.properties.lightRed,
        border: theme.properties.lightRedBorder,
      },
    },
  },
  vegetables: {
    title: "Légumes",
    imageSource: require("@assets/images/requires/recipesTypes/vegetables_3x.jpg"),
    color: {
      text: theme.properties.white,
      normal: {
        background: theme.properties.darkGreen,
        border: theme.properties.greenBorder,
      },
      pressed: {
        background: theme.properties.lightGreen,
        border: theme.properties.lightGreenBorder,
      },
    },
  },
  accompaniments: {
    title: "Accompa- gnements",
    imageSource: require("@assets/images/requires/recipesTypes/accompaniments_3x.jpg"),
    color: {
      text: theme.properties.white,
      normal: {
        background: theme.properties.darkYellow,
        border: theme.properties.yellowBorder,
      },
      pressed: {
        background: theme.properties.lightYellow,
        border: theme.properties.lightYellowBorder,
      },
    },
  },
  desserts: {
    title: "Desserts",
    imageSource: require("@assets/images/requires/recipesTypes/desserts_3x.jpg"),
    color: {
      text: theme.properties.white,
      normal: {
        background: theme.properties.darkPink,
        border: theme.properties.pinkBorder,
      },
      pressed: {
        background: theme.properties.lightPink,
        border: theme.properties.lightPinkBorder,
      },
    },
  },
  ingredients: {
    title: "Ingrédients",
    imageSource: require("@assets/images/requires/recipesTypes/ingredients_3x.jpg"),
    color: {
      text: theme.properties.brown,
      normal: {
        background: theme.properties.white,
        border: theme.properties.whiteBorder,
      },
      pressed: {
        background: theme.properties.beige,
        border: theme.properties.beigeBorder,
      },
    },
  },
  breakfast: {
    title: "Petit déjeuner",
    color: {
      normal: {
        background: theme.properties.darkPurple,
        border: theme.properties.purpleBorder,
      },
      pressed: {
        background: theme.properties.lightPurple,
        border: theme.properties.lightPurpleBorder,
      },
    },
  },
};
