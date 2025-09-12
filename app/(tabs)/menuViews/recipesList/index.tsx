import { AppText } from "@components/atoms/global/Texts";
import { useMenu } from "@contexts/MenuContext";
import { ImageBackground, StyleSheet, View } from "react-native";
import RecipesListHeader from "@components/organisms/menu/recipesList/RecipesListHeader";
import RecipesListContent from "@components/organisms/menu/recipesList/RecipesListContent";

export default function RecipesListView() {
  const { setMenu } = useMenu();
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/recipes_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <RecipesListHeader />
      <RecipesListContent />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
