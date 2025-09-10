import { useRef, useState } from "react";
import { ScrollView } from "react-native";  
import { getScreenWidth } from "@utils/getScreenDimensions";

export function useDaySlider() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    scrollRef.current?.scrollTo({
      x: index * getScreenWidth(),
      animated: true,
    });
    setCurrentIndex(index);
  };
  return { scrollRef, currentIndex, setCurrentIndex, goToSlide };
}
