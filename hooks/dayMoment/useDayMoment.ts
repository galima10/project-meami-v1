import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

export type ActualDayMoment = "morning" | "noon" | "evening";

const momentFr: Record<ActualDayMoment, string> = {
  morning: "Matin",
  noon: "Midi",
  evening: "Soir",
};

export function useDayMoment() {
  const getCurrentMoment = (): ActualDayMoment => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "noon";
    return "evening";
  };

  const [actualDayMoment, setActualDayMoment] = useState<ActualDayMoment>(getCurrentMoment);

  // Intervalle toutes les minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const newMoment = getCurrentMoment();
      if (newMoment !== actualDayMoment) setActualDayMoment(newMoment);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [actualDayMoment]);

  // Recalcul immédiat au focus du screen
  useFocusEffect(() => {
    const newMoment = getCurrentMoment();
    if (newMoment !== actualDayMoment) setActualDayMoment(newMoment);
  });

  const displayMoment = momentFr[actualDayMoment];

  return { actualDayMoment, displayMoment };
}
