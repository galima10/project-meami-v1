import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { AppText } from "@components/atoms/global/Texts";
import ReturnButton from "@components/molecules/menu/modify/ReturnButton";
import RecipesType from "../sideBar/RecipesType";
import { recipeTypes } from "@constants/recipeTypes";
import { useRecipesSideBar } from "@hooks/menu/modify/useRecipesSideBar";

interface RecipesSideBarProps {
  momentSelected: "Matin" | "Midi" | "Soir" | undefined;
  setIsDarkScreenVisible: (visible: boolean) => void;
  daySelected: string;
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir" | undefined) => void;
}

export default function RecipesSideBar({
  momentSelected,
  setIsDarkScreenVisible,
  daySelected,
  setMomentSelected,
}: RecipesSideBarProps) {
  const {
    step,
    setStep,
    handleClose,
    selectedRecipeType,
    setSelectedRecipeType,
  } = useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected);
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      {momentSelected === "Matin" && (
        <AppText style={styles.title}>Petit-déjeuner</AppText>
      )}
      {step === 2 && (
        <AppText style={styles.title}>
          {recipeTypes[selectedRecipeType].title}
        </AppText>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.typesList}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {momentSelected && momentSelected !== "Matin" ? (
          step === 1 ? (
            <RecipesType
              setStep={setStep}
              setSelectedRecipeType={setSelectedRecipeType}
            />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </ScrollView>
      <ReturnButton
        text={step === 1 ? "Fermer" : "Retour"}
        action={() => {
          step === 1
            ? handleClose()
            : momentSelected !== "Matin"
            ? setStep(1)
            : null;
        }}
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
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: theme.properties.semibold,
    textAlign: "center",
    marginVertical: 8,
  },
});
