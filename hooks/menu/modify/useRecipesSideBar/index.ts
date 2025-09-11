import { useState } from "react";

export function useRecipesSideBar(
  setIsDarkScreenVisible: (visible: boolean) => void,
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir" | undefined) => void
) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRecipeType, setSelectedRecipeType] =
    useState<string>("Petit-déjeuner");

  const handleClose = () => {
    setIsDarkScreenVisible(false);
    setSelectedRecipeType("Petit-déjeuner");
    setMomentSelected(undefined);
  };
  return {
    step,
    setStep,
    handleClose,
    selectedRecipeType,
    setSelectedRecipeType,
  };
}
