import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import RecipeElement from "../RecipeElement";
import { AppText } from "@components/atoms/global/Texts";
import { FlashList } from "@shopify/flash-list";

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
    <View style={styles.container}>
      {recipes && recipes?.filter((recipe) => recipe.number > 0).length ? (
        <FlashList
          data={recipes?.filter((recipe) => recipe.number > 0) || []}
          keyExtractor={(item: any, index) => item.id || index.toString()}
          renderItem={({ item }) => (
            <RecipeElement key={item.id} recipe={item} />
          )}
          estimatedItemSize={80}
          contentContainerStyle={{
            padding: 16,
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <AppText style={styles.text}>Aucune recette ajoutée</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 32,
    fontWeight: theme.properties.medium,
  },
});
