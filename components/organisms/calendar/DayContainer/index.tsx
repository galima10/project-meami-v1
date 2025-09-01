import DayMenu from "@components/molecules/calendar/DayMenu";
import MomentBand from "@components/organisms/calendar/MomentBand";
import { StyleSheet, View } from "react-native";
import { DayMomentType } from "@app-types/DayMomentType";

export default function DayContainer({momentSelected}: DayMomentType) {
  return (
    <>
      <View style={styles.band}>
        <MomentBand momentSelected={momentSelected} />
      </View>
      <View style={styles.menuContainer}>
        <DayMenu />
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
