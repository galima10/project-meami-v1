import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { getDateInfo } from "@utils/getDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { useDate } from "@hooks/dayMoment/useDate";

export default function CalendarView() {
  const { dayOfWeek, dayAndMonth } = getDateInfo();
  const { hour } = useDate(); // déjà à jour
  const { actualDayMoment, displayMoment } = useDayMoment();

  return (
    <View style={styles.screen}>
      <AppText style={styles.text}>Menu de la semaine Vue calendrier</AppText>
      <AppText style={{ marginTop: 20, textTransform: "capitalize" }}>{dayOfWeek}</AppText>
      <AppText>{dayAndMonth}</AppText>
      <AppText>
        {hour}h : {displayMoment}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.properties.beige,
  },
  text: {
    fontFamily: "SN",
    fontWeight: theme.properties.bold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
