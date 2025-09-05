import { useDayMoment } from "@hooks/menu/dayMoment/useDayMoment";
import { useCallback } from "react";
import { days } from "@utils/getDate";

interface UseDayNavigationParams {
  currentIndex: number;
  todayIndex: number;
  goToSlide: (index: number) => void;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  handleInteraction: () => void;
}

export function useDayNavigation({
  currentIndex,
  todayIndex,
  goToSlide,
  setMomentSelected,
  handleInteraction,
}: UseDayNavigationParams) {
  const { actualDayMoment } = useDayMoment();

  const goPrevious = useCallback(() => {
    if (currentIndex <= 0) return;
    const newIndex = currentIndex - 1;
    goToSlide(newIndex);

    setTimeout(() => {
      if (todayIndex === newIndex) {
        setMomentSelected(actualDayMoment);
      } else {
        setMomentSelected("morning");
      }
    }, 100);

    handleInteraction();
  }, [
    currentIndex,
    todayIndex,
    goToSlide,
    setMomentSelected,
    actualDayMoment,
    handleInteraction,
  ]);

  const goNext = useCallback(() => {
    if (currentIndex >= days.length - 1) return; // Empêche de dépasser le dernier jour (index 6)
    const newIndex = currentIndex + 1;
    goToSlide(newIndex);

    setTimeout(() => {
      if (todayIndex === newIndex) {
        setMomentSelected(actualDayMoment);
      } else {
        setMomentSelected("morning");
      }
    }, 100);

    handleInteraction();
  }, [
    currentIndex,
    todayIndex,
    goToSlide,
    setMomentSelected,
    actualDayMoment,
    handleInteraction,
  ]);

  return { goPrevious, goNext };
}
