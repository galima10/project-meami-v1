export function useDayNavigationButton(
  momentSelected?: "morning" | "noon" | "evening",
  currentIndex?: number,
  direction?: "left" | "right"
) {
  const safeIndex = currentIndex ?? -1;

  const shouldBeWhite =
    (momentSelected === "evening" && [0, 3, 4, 5].includes(safeIndex)) ||
    (momentSelected === "noon" && safeIndex === 4);

  return {
    shouldBeWhite,
    isLeft: direction === "left",
    isRight: direction === "right",
  };
}
