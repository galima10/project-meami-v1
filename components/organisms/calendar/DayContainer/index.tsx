import DayMenu from "@components/molecules/calendar/DayMenu";
import MomentBand from "@components/organisms/calendar/MomentBand";
import { StyleSheet, View } from "react-native";
import { DayMomentType } from "@app-types/DayMomentType";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";

interface DayContainerProps extends DayMomentType {
  day: string;
  currentIndex: number;
  index: number;
  todayIndex: number
}

export default function DayContainer({
  momentSelected,
  day,
  currentIndex,
  index,
  todayIndex
}: DayContainerProps) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row-reverse", flex: 1 }}
      >
        <View style={styles.menuContainer}>
          <DayMenu />
        </View>
        <View style={[styles.band, globalStyles.bigShadow]}>
          <MomentBand
            currentIndex={currentIndex}
            index={index}
            day={day}
            momentSelected={momentSelected}
            todayIndex={todayIndex}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <AppText style={styles.dayTitle}>{day}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    flex: 1,
    borderColor: theme.properties.brown,
    borderWidth: 0.5,
  },
  menuContainer: {
    flex: 3,
  },
  titleContainer: {
    justifyContent: "center",
    paddingVertical: 4,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
    lineHeight: 60,
  },
});
