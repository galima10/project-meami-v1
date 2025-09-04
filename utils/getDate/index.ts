// /utils/getDate.ts
import theme from "@themes/index";

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

export const dayColors: {
  [key in FrenchDayOfWeek]: string;
} = {
  lundi: theme.properties.lightOrange,
  mardi: theme.properties.lightGreen,
  mercredi: theme.properties.lightYellow,
  jeudi: theme.properties.lightRed,
  vendredi: theme.properties.lightPink,
  samedi: theme.properties.lightPurple,
  dimanche: theme.properties.white,
};

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
