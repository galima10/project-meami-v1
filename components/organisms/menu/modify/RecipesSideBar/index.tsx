import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { AppText } from "@components/atoms/global/Texts";
import ReturnButton from "@components/molecules/menu/modify/ReturnButton";
import RecipeTypeButton from "@components/molecules/menu/modify/RecipeTypeButton";
import { recipeTypes } from "@constants/recipeTypes";
import { useState } from "react";
import RecipesType from "../sideBar/RecipesType";

interface RecipesSideBarProps {
  momentSelected: "Matin" | "Midi" | "Soir" | undefined;
  setIsDarkScreenVisible: (visible: boolean) => void;
  daySelected: string;
}

export default function RecipesSideBar({
  momentSelected,
  setIsDarkScreenVisible,
  daySelected,
}: RecipesSideBarProps) {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AppText>{daySelected}</AppText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.typesList}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {momentSelected !== "Matin" ? (
          step === 1 ? (
            <RecipesType setStep={setStep} />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </ScrollView>
      <ReturnButton
        text={step === 1 ? "Fermer" : "Retour"}
        action={() => (step === 1 ? setIsDarkScreenVisible(false) : setStep(1))}
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
});
