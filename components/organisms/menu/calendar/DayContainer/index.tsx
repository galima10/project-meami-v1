import MenuContentContainer from "@components/organisms/menu/calendar/MenuContentContainer";
import MomentBand from "@components/organisms/menu/calendar/MomentBand";
import { StyleSheet, View } from "react-native";
import { DayMomentType } from "@app-types/DayMomentType";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import { FrenchDayOfWeek } from "@utils/getDate";

interface DayContainerProps extends DayMomentType {
  day: FrenchDayOfWeek;
  currentIndex: number;
  index: number;
  todayIndex: number;
  menu: {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  };
  handleInteraction: () => void;
}

export default function DayContainer({
  momentSelected,
  day,
  currentIndex,
  index,
  todayIndex,
  menu,
  handleInteraction,
}: DayContainerProps) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row-reverse", flex: 1 }}>
        <View style={styles.menuContainer}>
          <MenuContentContainer
            day={day}
            menu={menu}
            momentSelected={momentSelected}
            handleInteraction={handleInteraction}
          />
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
    borderColor: theme.properties.orangeBorder,
    borderWidth: 1,
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
