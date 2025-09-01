import { View, StyleSheet, Pressable } from "react-native";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import { useDate } from "@hooks/dayMoment/useDate";
import DayContainer from "@components/organisms/calendar/DayContainer";
import MomentModule from "@components/organisms/calendar/MomentModule";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useState, useEffect, useRef } from "react";
import { AppText } from "@components/atoms/global/Texts";
import { useInteractionCooldown } from "@hooks/calendar/useInteractionCooldown";

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate();
  const { actualDayMoment } = useDayMoment();
  const [momentSelected, setMomentSelected] = useState(actualDayMoment);

  const { hasInteracted, handleInteraction } = useInteractionCooldown();

  useEffect(() => {
    if (!hasInteracted) {
      setMomentSelected(actualDayMoment);
    }
  }, [actualDayMoment, hasInteracted]);

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleInteraction}
      style={styles.screen}
    >
      <DayContainer momentSelected={momentSelected} />
      <View style={styles.buttonsContainer}>
        <MomentModule
          momentSelected={momentSelected}
          setMomentSelected={setMomentSelected}
        />
        <AppText>{hasInteracted ? "Oui" : "Non"}</AppText>
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
