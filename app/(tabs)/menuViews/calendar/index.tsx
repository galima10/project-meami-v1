import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import MomentModule from "@components/organisms/calendar/MomentModule";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useState} from "react";
import { useInteractionCooldown } from "@hooks/calendar/useInteractionCooldown";
import DayNavigation from "@components/organisms/calendar/DayNavigation";
import DaySliderDisplay from "@components/organisms/calendar/DaySlider";
import { useDaySlider } from "@hooks/calendar/useDaySlider";
import TodayButton from "@components/molecules/calendar/TodayButton";

export default function CalendarView() {
  const { actualDayMoment } = useDayMoment();
  const [momentSelected, setMomentSelected] = useState(actualDayMoment);

  const {
    scrollRef,
    days,
    goToSlide,
    todayIndex,
    currentIndex,
    setCurrentIndex,
  } = useDaySlider();

  const { handleInteraction, setHasInteracted, countdown } = useInteractionCooldown({
    setMomentSelected,
    setCurrentIndex,
    scrollRef,
    
  });

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleInteraction}
      style={styles.screen}
    >
      <DaySliderDisplay
        days={days}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        momentSelected={momentSelected}
        todayIndex={todayIndex}
        scrollRef={scrollRef}
      />
      <View
        style={{ position: "absolute", width: "100%", alignItems: "center" }}
      >
        <DayNavigation
          currentIndex={currentIndex}
          goToSlide={goToSlide}
          setMomentSelected={setMomentSelected}
          handleInteraction={handleInteraction}
          todayIndex={todayIndex}
          momentSelected={momentSelected}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <MomentModule
          momentSelected={momentSelected}
          setMomentSelected={setMomentSelected}
          handleInteraction={handleInteraction}
        />
        <TodayButton setHasInteracted={setHasInteracted} countdown={countdown} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.properties.beige,
    flexDirection: "row",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    padding: 12,
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: theme.properties.white,
    flexDirection: "row",
  },
});
