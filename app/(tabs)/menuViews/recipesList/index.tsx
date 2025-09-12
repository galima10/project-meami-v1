import { ImageBackground, StyleSheet } from "react-native";
import RecipesListHeader from "@components/organisms/menu/recipesList/RecipesListHeader";
import RecipesListContent from "@components/organisms/menu/recipesList/RecipesListContent";
import { mockedRecipeList } from "@constants/mockedMenu";
import { useState, useCallback } from "react";
import DarkScreenContainer from "@components/organisms/global/DarkScreenContainer";
import AddPanel from "@components/organisms/global/AddPanel";
import RecipeElement from "@components/organisms/menu/recipesList/RecipeElement";

interface Recipe {
  id: number;
  name: string;
  type: string;
  image: any;
  number: number;
}

export default function RecipesListView() {
  const [isDarkScreenVisible, setIsDarkScreenVisible] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState<
    "ingredientsList" | "addRecipe" | null
  >(null);
  // const [localRecipeList, setLocalRecipeList] = useState([]);
  const [localRecipeList, setLocalRecipeList] = useState(mockedRecipeList);

  const renderItem = useCallback(
    (item: Recipe) => <RecipeElement key={item.id} recipe={item} />,
    []
  );

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/recipes_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <RecipesListHeader
        recipeLength={
          localRecipeList.filter((recipe) => recipe.number > 0).length
        }
        setIsDarkScreenVisible={setIsDarkScreenVisible}
        setSelectedPanel={setSelectedPanel}
      />
      <RecipesListContent recipes={localRecipeList} />
      <DarkScreenContainer
        visible={isDarkScreenVisible}
        style={{ paddingHorizontal: 0, justifyContent: "flex-end" }}
      >
        {selectedPanel === "addRecipe" && (
          <AddPanel
            setIsDarkScreenVisible={setIsDarkScreenVisible}
            data={mockedRecipeList}
            renderItem={renderItem}
          />
        )}
      </DarkScreenContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
