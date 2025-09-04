import { useDayMoment } from "@hooks/menu/dayMoment/useDayMoment";
import { useMemo } from "react";

interface UseMomentBandParams {
  momentSelected: "morning" | "noon" | "evening";
  day: string;
  index: number;
  currentIndex: number;
  todayIndex: number;
}

export function useMomentBand({
  momentSelected,
  day,
  index,
  currentIndex,
  todayIndex,
}: UseMomentBandParams) {
  const { actualDayMoment } = useDayMoment();

  // Traduction moment → texte affiché
  const momentMap = {
    morning: "Matin",
    noon: "Midi",
    evening: "Soir",
  } as const;

  // Déterminer quel "moment" afficher (logique centralisée)
  const effectiveMoment = useMemo<"morning" | "noon" | "evening">(() => {
    if (index === currentIndex) return momentSelected;
    if (index === todayIndex) return actualDayMoment;
    return "morning";
  }, [index, currentIndex, todayIndex, momentSelected, actualDayMoment]);

  // Texte affiché (Matin, Midi, Soir)
  const momentLabel = useMemo(
    () => momentMap[effectiveMoment],
    [effectiveMoment]
  );

  // Clé pour choisir l’image
  const key = useMemo(
    () => `${day.toLowerCase()}_${effectiveMoment}`,
    [day, effectiveMoment]
  );

  return { momentLabel, key };
}
