import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { LinearGradient } from "expo-linear-gradient";
import theme from "@themes/index";
import { FrenchDayOfWeek } from "@utils/getDate";
import { dayColors } from "@utils/getDate";
import { useMemo } from "react";
import { iconsMap } from "@constants/menuIconsMap";
import MenuDisplayContent from "@components/molecules/menu/calendar/MenuDisplayContent";
import { DayMomentType } from "@app-types/DayMomentType";

interface DayMenuProps extends DayMomentType {
  day: FrenchDayOfWeek;
  menu: {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  };
  handleInteraction: () => void;
}
export default function MenuContentContainer({
  day,
  menu,
  momentSelected,
  handleInteraction,
}: DayMenuProps) {
  const key = useMemo(() => `${day.toLowerCase()}_icons`, [day]);
  return (
    <ImageBackground
      source={iconsMap[key]}
      resizeMode="contain"
      style={styles.container}
      imageStyle={day !== "dimanche" && { opacity: 0.6 }}
    >
      <LinearGradient
        colors={["transparent", dayColors[day]]}
        locations={[0.5, 1]}
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <MenuDisplayContent
          momentSelected={momentSelected}
          menu={menu}
          handleInteraction={handleInteraction}
        />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.properties.beige,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
