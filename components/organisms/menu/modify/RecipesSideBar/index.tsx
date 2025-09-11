import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { AppText } from "@components/atoms/global/Texts";
import ReturnButton from "@components/molecules/menu/modify/ReturnButton";
import RecipesType from "../sideBar/RecipesType";
import { recipeTypes } from "@constants/recipeTypes";
import { useRecipesSideBar } from "@hooks/menu/modify/useRecipesSideBar";
import RecipeCard from "@components/molecules/menu/modify/RecipeCard";
import { mockedRecipeList } from "@constants/mockedMenu";
import { useState } from "react";

interface RecipesSideBarProps {
  momentSelected: "Matin" | "Midi" | "Soir" | undefined;
  setIsDarkScreenVisible: (visible: boolean) => void;
  daySelected: string;
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir" | undefined) => void;
  selectedRecipeType: string | undefined;
  setSelectedRecipeType: (type: string | undefined) => void;
}

export default function RecipesSideBar({
  momentSelected,
  setIsDarkScreenVisible,
  daySelected,
  setMomentSelected,
  selectedRecipeType,
  setSelectedRecipeType,
}: RecipesSideBarProps) {
  const { step, setStep, scrollRef, handleCloseAndReturn } = useRecipesSideBar(
    setIsDarkScreenVisible,
    setMomentSelected,
    momentSelected
  );

  const filteredRecipes = mockedRecipeList.filter(
    (recipe) => recipe.type === selectedRecipeType
  );

  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      {momentSelected === "Matin" && (
        <AppText style={styles.title}>Petit-déjeuner</AppText>
      )}
      {step === 2 && (
        <AppText style={styles.title}>
          {selectedRecipeType && recipeTypes[selectedRecipeType].title}
        </AppText>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.typesList}
        contentContainerStyle={{ paddingBottom: 32 }}
        ref={scrollRef}
      >
        {momentSelected && momentSelected !== "Matin" ? (
          step === 1 ? (
            <RecipesType
              setStep={setStep}
              setSelectedRecipeType={setSelectedRecipeType}
            />
          ) : (
            <>
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  key={recipe.name + recipe.id}
                  recipe={recipe}
                  selectedRecipeType={selectedRecipeType}
                />
              ))}
            </>
          )
        ) : (
          <>
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={recipe.name + recipe.id}
                recipe={recipe}
                selectedRecipeType={selectedRecipeType}
              />
            ))}
          </>
        )}
      </ScrollView>
      <ReturnButton
        text={step === 1 ? "Fermer" : "Retour"}
        action={handleCloseAndReturn}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 154,
    height: "100%",
    backgroundColor: theme.properties.beige,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    position: "absolute",
    right: 0,
    top: 0,
  },
  typesList: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: theme.properties.semibold,
    textAlign: "center",
    marginVertical: 8,
  },
});
