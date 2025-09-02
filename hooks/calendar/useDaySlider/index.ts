import { days } from "@utils/getDate";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useDate } from "@hooks/dayMoment/useDate";
import { getScreenWidth } from "@utils/getScreenDimensions";

export function useDaySlider() {
  const { todayIndex } = useDate();
  const scrollRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(
    todayIndex !== -1 ? todayIndex : 0
  );

  const goToSlide = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * getScreenWidth(), animated: true });
    setCurrentIndex(index);
  };

  return {
    scrollRef,
    days,
    goToSlide,
    todayIndex,
    currentIndex,
    setCurrentIndex,
  };
}
