import { View, StyleSheet } from "react-native";
import RecipeElementMenu from "@components/atoms/menu/calendar/RecipeElementMenu";

interface RecipesContainerProps {
  meals: { name: string; type: string }[];
  handleInteraction: () => void;
}

export default function RecipesContainer({ meals, handleInteraction }: RecipesContainerProps) {
  return (
    <View style={styles.container}>
      {meals.map((meal) => (
        <RecipeElementMenu key={meal.name} recipe={meal.name} handleInteraction={handleInteraction} />
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
