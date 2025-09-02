import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import DayContainer from "@components/organisms/calendar/DayContainer";
import MomentModule from "@components/organisms/calendar/MomentModule";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useState, useEffect, useCallback, useRef } from "react";
import { useInteractionCooldown } from "@hooks/calendar/useInteractionCooldown";
import DayNavigation from "@components/organisms/calendar/DayNavigation";
import { useDate } from "@hooks/dayMoment/useDate";
import { AppText } from "@components/atoms/global/Texts";
import { useFocusEffect } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate();
  const { actualDayMoment, displayMoment } = useDayMoment();
  const [momentSelected, setMomentSelected] = useState(actualDayMoment);

  const { hasInteracted, handleInteraction } = useInteractionCooldown();

  useEffect(() => {
    setMomentSelected(actualDayMoment);
  }, [actualDayMoment]);

  // Réinitialise momentSelected quand l'écran reprend le focus si pas d'interaction
  useFocusEffect(
    useCallback(() => {
      if (!hasInteracted) {
        setMomentSelected(actualDayMoment);
      }
    }, [actualDayMoment, hasInteracted])
  );

  const scrollRef = useRef<ScrollView>(null);

  const goToSlide = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * SCREEN_WIDTH, animated: true });
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const days = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleInteraction}
      style={styles.screen}
    >
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          onMomentumScrollEnd={(e) => {
            const offsetX = e.nativeEvent.contentOffset.x;
            const newIndex = Math.round(offsetX / SCREEN_WIDTH);
            setCurrentIndex(newIndex);
          }}
        >
          {days.map((day, index) => (
            <View key={index} style={{ width: SCREEN_WIDTH, flex: 1 }}>
              <DayContainer momentSelected={momentSelected} />
              <AppText>{day}</AppText>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <DayContainer momentSelected={momentSelected} /> */}
      <DayNavigation currentIndex={currentIndex} goToSlide={goToSlide} actualDay={dayOfWeek} />
      <View style={styles.buttonsContainer}>
        <MomentModule
          momentSelected={momentSelected}
          setMomentSelected={setMomentSelected}
        />
        {/* <AppText
          style={{ marginTop: 20, textTransform: "capitalize", color: "white" }}
        >
          {dayOfWeek}
        </AppText>
        <AppText style={{ color: "white" }}>{dayAndMonth}</AppText>
        <AppText style={{ color: "white" }}>
          {hour}h : {displayMoment}
        </AppText> */}
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    position: "absolute",
    bottom: 100,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: theme.properties.white,
    flexDirection: "row",
  },
});
