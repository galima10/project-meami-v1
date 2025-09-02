import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import DayContainer from "@components/organisms/calendar/DayContainer";
import MomentModule from "@components/organisms/calendar/MomentModule";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useState, useEffect, useCallback } from "react";
import { useInteractionCooldown } from "@hooks/calendar/useInteractionCooldown";
import DayNavigation from "@components/organisms/calendar/DayNavigation";
import { useDate } from "@hooks/dayMoment/useDate";
import { AppText } from "@components/atoms/global/Texts";
import { useFocusEffect } from "@react-navigation/native";

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate();
  const { actualDayMoment, displayMoment } = useDayMoment();
  const [momentSelected, setMomentSelected] = useState(actualDayMoment);

  const { hasInteracted, handleInteraction } = useInteractionCooldown();

  useFocusEffect(
  useCallback(() => {
    if (!hasInteracted) {
      setMomentSelected(actualDayMoment);
    }
  }, [actualDayMoment, hasInteracted])
);

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleInteraction}
      style={styles.screen}
    >
      <DayContainer momentSelected={momentSelected} />
      <DayNavigation actualDay={dayOfWeek} />
      <View style={styles.buttonsContainer}>
        <MomentModule
          momentSelected={momentSelected}
          setMomentSelected={setMomentSelected}
        />
        <AppText style={{ marginTop: 20, textTransform: "capitalize", color: "white" }}>
          {dayOfWeek}
        </AppText>
        <AppText style={{ color: "white" }}>{dayAndMonth}</AppText>
        <AppText style={{ color: "white" }}>
          {hour}h : {displayMoment}
        </AppText>
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
});
