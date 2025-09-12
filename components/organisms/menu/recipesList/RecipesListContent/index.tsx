import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import RecipeElement from "../RecipeElement";
import { AppText } from "@components/atoms/global/Texts";

export default function RecipesListContent({
  recipes,
}: {
  recipes?: {
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
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => {
          if (recipe.number > 0) {
            return <RecipeElement key={recipe.id} recipe={recipe} />;
          }
        })
      ) : (
        <AppText style={styles.text}>Aucune recette disponible</AppText>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 32,
    fontWeight: theme.properties.medium,
  }
});
