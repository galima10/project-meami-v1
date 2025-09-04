// /utils/getDate.ts

export type FrenchDayOfWeek =
  | "lundi"
  | "mardi"
  | "mercredi"
  | "jeudi"
  | "vendredi"
  | "samedi"
  | "dimanche";

export const days: FrenchDayOfWeek[] = [
  "samedi",
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
];

export function getDateInfo() {
  const now = new Date();
  const dayOfWeek = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
  }).format(now) as FrenchDayOfWeek;
  const dayAndMonth = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
  }).format(now);
  const hour = now.getHours();
  return {
    dayOfWeek,
    dayAndMonth,
    hour,
  };
}

export function getDayMoment(hour: number): "morning" | "noon" | "evening" {
  if (hour >= 4 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "noon";
  return "evening";
}
