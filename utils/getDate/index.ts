export function getDateInfo() {
  const now = new Date();
  return {
    dayOfWeek: new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(now),
    dayAndMonth: new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "long" }).format(now),
    hour: now.getHours(),
  };
}
