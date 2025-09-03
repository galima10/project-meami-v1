import { getScreenWidth } from "@utils/getScreenDimensions";
import { ScrollView } from "react-native";
import { days } from "@utils/getDate";

// utils/updateScrollAndMoment.ts
export function updateScrollAndMoment(
  scrollRef: React.RefObject<ScrollView | null>,
  setCurrentIndex: (index: number) => void,
  setMomentSelected: (moment: any) => void,
  dayOfWeek: string,
  actualDayMoment: string
) {
  const todayIndex = days.findIndex(day => day === dayOfWeek);
  if (todayIndex !== -1) {
    setCurrentIndex(todayIndex);
    scrollRef.current?.scrollTo({
      x: getScreenWidth() * todayIndex,
      animated: true,
    });
  }
  setMomentSelected(actualDayMoment);
}

