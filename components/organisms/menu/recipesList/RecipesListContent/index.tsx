import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import RecipeElement from "../RecipeElement";
import { mockedRecipeList } from "@constants/mockedMenu";

export default function RecipesListContent() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 16 }}>
      {mockedRecipeList.map((recipe) => {
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
