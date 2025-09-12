import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import CounterModule from "@components/organisms/global/CounterModule";
import { globalStyles } from "@themes/styles";
import RecipeName from "@components/molecules/menu/recipesList/RecipeName";

export default function RecipeElement({recipe}: {recipe: {
  id: number;
  name: string;
  type: string;
  image: any;
  number: number;
}}) {

  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <RecipeName recipe={recipe} />
      <CounterModule quantity={recipe.number} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
});
