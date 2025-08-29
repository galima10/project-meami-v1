// /utils/getDate.ts

export function getDateInfo() {
  const now = new Date();
  return {
    dayOfWeek: new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(now),
    dayAndMonth: new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "long" }).format(now),
    hour: now.getHours(),
  };
}

// Ajoute cette fonction
export function getDayMoment(hour: number): "morning" | "noon" | "evening" {
  if (hour >= 4 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "noon";
  return "evening";
}
