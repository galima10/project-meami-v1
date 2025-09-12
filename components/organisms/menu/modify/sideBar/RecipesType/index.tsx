import { View, StyleSheet } from "react-native";
import { recipeTypes } from "@constants/recipeTypes";
import RecipeTypeButton from "@components/molecules/menu/modify/RecipeTypeButton";

interface RecipesSideBarProps {
  setStep: (step: 1 | 2) => void;
  setSelectedRecipeType: (type: string) => void;
}

export default function RecipesType({
  setStep,
  setSelectedRecipeType
}: RecipesSideBarProps) {
  return (
    <View>
      {Object.entries(recipeTypes).map(([key, type]) => {
        if (key !== "breakfast") {
          return (
            <RecipeTypeButton
              key={key}
              type={key}
              action={() => {
                setStep(2);
                setSelectedRecipeType(key);
              }}
            />
          );
        }
      })}
    </View>
  );
}
