import { useEffect, useState } from "react";

export function useDayNavigationButton(
  momentSelected?: "morning" | "noon" | "evening",
  currentIndex?: number,
  direction?: "left" | "right"
) {
  const safeIndex = currentIndex ?? -1;

  // état local pour retarder le calcul
  const [shouldBeWhite, setShouldBeWhite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextValue =
        (momentSelected === "evening" && [0, 3, 4, 5].includes(safeIndex)) ||
        (momentSelected === "noon" && safeIndex === 4);

      setShouldBeWhite(nextValue);
    }, 50);

    return () => clearTimeout(timer); // clean up si props changent vite
  }, [momentSelected, safeIndex]);

  return {
    shouldBeWhite,
    isLeft: direction === "left",
    isRight: direction === "right",
  };
}
