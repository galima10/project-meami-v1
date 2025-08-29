import { useDate } from "./useDate";
import { getDayMoment } from "@utils/getDate";

export function useDayMoment() {
  const { hour } = useDate(); // déjà à jour
  const actualDayMoment = getDayMoment(hour); // recalcul direct
  const displayMoment = {
    morning: "Matin",
    noon: "Midi",
    evening: "Soir",
  }[actualDayMoment];

  return { actualDayMoment, displayMoment };
}
