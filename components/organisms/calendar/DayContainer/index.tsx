import DayMenu from "@components/molecules/calendar/DayMenu";
import MomentBand from "@components/organisms/calendar/MomentBand";
import { StyleSheet, View } from "react-native";
import { DayMomentType } from "@app-types/DayMomentType";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";

interface DayContainerProps extends DayMomentType {
  day: string;
  currentIndex: number;
  index: number;
}

export default function DayContainer({momentSelected, day, currentIndex, index}: DayContainerProps) {
  return (
    <View style={{ flexDirection: "row-reverse", flex: 1 }}>
      <View style={styles.menuContainer}>
        <DayMenu />
      </View>
      <View style={[styles.band, globalStyles.bigShadow]}>
        <MomentBand currentIndex={currentIndex} index={index} day={day} momentSelected={momentSelected} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    flex: 1,
    borderColor: theme.properties.brown,
    borderWidth: .5,
  },
  menuContainer: {
    flex: 3,
  },
  
});
