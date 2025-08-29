import { useState, useEffect } from "react";

export type ActualDayMoment = "morning" | "noon" | "evening";

const momentFr: Record<ActualDayMoment, string> = {
  morning: "Matin",
  noon: "Midi",
  evening: "Soir",
};

export function useDayMoment(hour: number) {
  const [actualDayMoment, setActualDayMoment] = useState<ActualDayMoment | undefined>(undefined);

  useEffect(() => {
    if (hour >= 6 && hour < 12) setActualDayMoment("morning");
    else if (hour >= 12 && hour < 18) setActualDayMoment("noon");
    else setActualDayMoment("evening");
  }, [hour]);

  const displayMoment = actualDayMoment ? momentFr[actualDayMoment] : "";

  return { actualDayMoment, displayMoment };
}