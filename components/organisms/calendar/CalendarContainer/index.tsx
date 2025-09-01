import { View, StyleSheet } from "react-native";
import CalendarBand from "@components/organisms/calendar/CalendarBand";
import CalendarMenu from "@components/molecules/calendar/CalendarMenu";

export default function CalendarContainer() {
  return (
    <>
      <View style={styles.band}>
        <CalendarBand />
      </View>
      <View style={styles.menuContainer}>
        <CalendarMenu />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  band: {
    flex: 1,
  },
  menuContainer: {
    flex: 3,
  },
});
