import { getDayMoment } from "@utils/getDate";
import { useDate } from "../useDate";

export function useDayMoment(hour?: number) {
  const { hour: dateHour } = useDate();

  // si un hour est passé en paramètre, on l'utilise, sinon on prend celui de useDate
  const currentHour = hour ?? dateHour;
  const actualDayMoment = getDayMoment(currentHour); // recalcul direct
  const displayMoment = {
    morning: "Matin",
    noon: "Midi",
    evening: "Soir",
  }[actualDayMoment];

  return { actualDayMoment, displayMoment };
}
