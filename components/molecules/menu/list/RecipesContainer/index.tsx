import { View, StyleSheet } from "react-native";
import RecipeElementMenu from "@components/atoms/menu/calendar/RecipeElementMenu";

export default function RecipesContainer({ meals }: { meals: { name: string; type: string }[] }) {
  return (
    <View style={styles.container}>
      {meals.map((meal) => (
        <RecipeElementMenu key={meal.name} recipe={meal.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    alignSelf: "center",
  },
});
