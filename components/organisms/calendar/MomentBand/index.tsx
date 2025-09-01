import { StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { DayMomentType } from "@app-types/DayMomentType";
import useMomentBand from "@hooks/calendar/useMomentBand";
import { imagesMap } from "@constants/imagesBandMap";
import { getDateInfo } from "@utils/getDate";
import { useMemo } from "react";

export default function MomentBand({ momentSelected }: DayMomentType) {
  const { dayOfWeek } = getDateInfo();
  const moment = useMomentBand(momentSelected);

  const key = useMemo(
    () => `${dayOfWeek.toLowerCase()}_${momentSelected}`,
    [dayOfWeek, momentSelected]
  );

  return (
    <ImageBackground
      source={imagesMap[key]}
      resizeMode="cover"
      style={styles.container}
    >
      <AppText style={styles.dayMomentText}>{moment}</AppText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dayMomentText: {
    marginBottom: 280,
    transform: [{ rotate: "-90deg" }],
    textTransform: "uppercase",
    color: theme.properties.white,
    fontWeight: theme.properties.bold,
    // backgroundColor: "rgba(0,0,0,0.3)",
    fontSize: 64,
    textAlign: "center",
    width: 200,
    lineHeight: 64,
  },
});
