import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import { useDate } from "@hooks/dayMoment/useDate";
import DayContainer from "@components/organisms/calendar/DayContainer";
import MomentModule from "@components/organisms/calendar/MomentModule";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useState, useEffect } from "react";

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate();
  const { actualDayMoment } = useDayMoment();
  const [momentSelected, setMomentSelected] = useState(actualDayMoment);
  useEffect(() => {
    setMomentSelected(actualDayMoment);
  }, [actualDayMoment]);

  return (
    <View style={styles.screen}>
      <DayContainer momentSelected={momentSelected} />
      <View style={styles.buttonsContainer}>
        <MomentModule momentSelected={momentSelected} setMomentSelected={setMomentSelected} />
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
