import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useCallback } from "react";

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
  }, [currentIndex, todayIndex, goToSlide, setMomentSelected, actualDayMoment, handleInteraction]);

  const goNext = useCallback(() => {
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
  }, [currentIndex, todayIndex, goToSlide, setMomentSelected, actualDayMoment, handleInteraction]);

  return { goPrevious, goNext };
}
