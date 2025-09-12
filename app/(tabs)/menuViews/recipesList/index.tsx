import { ImageBackground, StyleSheet, Keyboard } from "react-native";
import RecipesListHeader from "@components/organisms/menu/recipesList/RecipesListHeader";
import RecipesListContent from "@components/organisms/menu/recipesList/RecipesListContent";
import { mockedRecipeList } from "@constants/mockedMenu";
import { useState } from "react";
import DarkScreenContainer from "@components/organisms/global/DarkScreenContainer";
import AddPanel from "@components/organisms/global/AddPanel";

export default function RecipesListView() {
  const [isDarkScreenVisible, setIsDarkScreenVisible] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState<
    "ingredientsList" | "addRecipe" | null
  >(null);
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/recipes_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <RecipesListHeader
        recipeLength={
          mockedRecipeList.filter((recipe) => recipe.number > 0).length
        }
        setIsDarkScreenVisible={setIsDarkScreenVisible}
        setSelectedPanel={setSelectedPanel}
      />
      <RecipesListContent recipes={mockedRecipeList} />
      <DarkScreenContainer
        visible={isDarkScreenVisible}
        style={{ paddingHorizontal: 0, justifyContent: "flex-end" }}
        onStartShouldSetResponder={() => true}
        onResponderGrant={() => Keyboard.dismiss()}
      >
        {selectedPanel === "addRecipe" && <AddPanel />}
      </DarkScreenContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
