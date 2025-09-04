import { View, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { LinearGradient } from "expo-linear-gradient";
import theme from "@themes/index";
import { FrenchDayOfWeek } from "@utils/getDate";
import { dayColors } from "@utils/getDate";
import { useMemo } from "react";
import { iconsMap } from "@constants/menuIconsMap";

interface DayMenuProps {
  day: FrenchDayOfWeek;
}
export default function DayMenu({ day }: DayMenuProps) {
  const key = useMemo(() => `${day.toLowerCase()}_icons`, [day]);
  return (
    <ImageBackground
      source={iconsMap[key]}
      resizeMode="contain"
      style={styles.container}
      imageStyle={
        day !== "dimanche" &&
        { opacity: 0.6 }
      }
    >
      <LinearGradient
        colors={["transparent", dayColors[day]]}
        locations={[0.5, 1]}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText style={{ fontSize: 16 }}>Non renseigné</AppText>
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
