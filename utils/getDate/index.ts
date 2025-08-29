export function getDate() {
  const now = new Date();

  const dayOfWeek = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
  }).format(now);
  const dayAndMonth = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
  }).format(now);
  const hour = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    hour12: false,
  }).format(now);

  return { dayOfWeek, dayAndMonth, hour };
}
