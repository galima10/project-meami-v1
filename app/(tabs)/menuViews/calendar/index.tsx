import NavigationDotsModule from "@components/molecules/menu/calendar/NavigationDotsModule";
import TodayButton from "@components/molecules/menu/calendar/TodayButton";
import DayNavigation from "@components/organisms/menu/calendar/DayNavigation";
import DaySliderDisplay from "@components/organisms/menu/calendar/DaySlider";
import MomentModule from "@components/organisms/menu/calendar/MomentModule";
import { useDaySlider } from "@hooks/menu/calendar/useDaySlider";
import { useInteractionCooldown } from "@hooks/menu/calendar/useInteractionCooldown";
import { useDayMoment } from "@hooks/menu/dayMoment/useDayMoment";
import theme from "@themes/index";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useUnmountOnBlur } from "@hooks/global/useUnmountOnBlur";

export default function CalendarView() {
  // useUnmountOnBlur(
  //   () => {
  //     /* montage */
  //   },
  //   () => {
  //     /* démontage */
  //   }
  // );
  useUnmountOnBlur(
    () => {
      // montage
    },
    () => {
      // démontage
    }
  );

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

  const {
    handleInteraction,
    setHasInteracted,
    countdown,
    resetProgressKey,
    forceRefresh,
  } = useInteractionCooldown({
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
        <TodayButton
          resetProgressKey={resetProgressKey}
          setHasInteracted={setHasInteracted}
          countdown={countdown}
          forceRefresh={forceRefresh}
        />
      </View>
      <NavigationDotsModule
        currentIndex={currentIndex}
        goToSlide={goToSlide}
        handleInteraction={handleInteraction}
        todayIndex={todayIndex}
        setMomentSelected={setMomentSelected}
        actualDayMoment={actualDayMoment}
      />
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
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: theme.properties.white,
    flexDirection: "row",
  },
});
