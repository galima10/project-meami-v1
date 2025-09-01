import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import { useDate } from "@hooks/dayMoment/useDate";
import CalendarContainer from "@components/organisms/calendar/CalendarContainer";

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate();

  return (
    <View style={styles.screen}>
      <CalendarContainer />
      {/* <AppText style={styles.text}>Menu de la semaine Vue calendrier</AppText>
      <AppText style={{ marginTop: 20, textTransform: "capitalize" }}>{dayOfWeek}</AppText>
      <AppText>{dayAndMonth}</AppText>
      <AppText>
        {hour}h : {displayMoment}
      </AppText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.properties.beige,
    flexDirection: "row",
  },
});
