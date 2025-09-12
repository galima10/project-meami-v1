import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import RecipeElement from "../RecipeElement";

export default function RecipesListContent({
  recipes,
}: {
  recipes: {
    id: number;
    name: string;
    type: string;
    image: any;
    number: number;
  }[];
}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      {recipes.map((recipe) => {
        if (recipe.type !== "ingredients" && recipe.number > 0) {
          return <RecipeElement key={recipe.id} recipe={recipe} />;
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    // backgroundColor: theme.properties.white,
  },
});
