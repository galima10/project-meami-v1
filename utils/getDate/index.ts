export function getDate() {
  const now = new Date();

  const dayOfWeek = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
  }).format(now);
  const dayAndMonth = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
  }).format(now);
  const hour = now.getHours(); // nombre entier, 0-23

  return { dayOfWeek, dayAndMonth, hour };
}
