import { StyleSheet, ImageBackground } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { DayMomentType } from "@app-types/DayMomentType";
import useMomentBand from "@hooks/calendar/useMomentBand";
import { imagesMap } from "@constants/imagesBandMap";
import { getDateInfo } from "@utils/getDate";
import { useMemo } from "react";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";

interface MomentBandProps extends DayMomentType {
  day: string;
  index: number;
  currentIndex: number;
}

export default function MomentBand({ momentSelected, day, index, currentIndex }: MomentBandProps) {
  const { dayOfWeek } = getDateInfo();
  const { actualDayMoment } = useDayMoment();
  const moment = useMomentBand(momentSelected);

  const momentSlide = index === currentIndex ? momentSelected : "morning";

  const key = useMemo(() => {
    return `${day.toLowerCase()}_${momentSlide}`
  }, [day, momentSelected]);

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
