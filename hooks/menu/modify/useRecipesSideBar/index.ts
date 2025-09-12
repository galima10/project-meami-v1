import { useState, useRef } from "react";
import { ScrollView } from "react-native";

export function useRecipesSideBar(
  setIsDarkScreenVisible: (visible: boolean) => void,
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir" | undefined) => void,
  setSelectedRecipeType: (type: string | undefined) => void,
  momentSelected: "Matin" | "Midi" | "Soir" | undefined
) {
  const scrollRef = useRef<ScrollView>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const handleClose = () => {
    setIsDarkScreenVisible(false);
    setSelectedRecipeType(undefined);
    setMomentSelected(undefined);
  };

  const handleReturn = () => {
    setStep(1);
    scrollToTop();
  };

  const handleCloseAndReturn = () => {
    if (step === 1) {
      handleClose();
    } else if (momentSelected !== "Matin") {
      handleReturn();
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0, // position verticale
      x: 0, // position horizontale (si besoin)
      animated: true, // animation smooth
    });
  };

  return {
    step,
    setStep,
    scrollRef,
    handleCloseAndReturn,
  };
}
