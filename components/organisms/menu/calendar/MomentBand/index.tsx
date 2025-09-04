import { DayMomentType } from "@app-types/DayMomentType";
import { AppText } from "@components/atoms/global/Texts";
import { imagesMap } from "@constants/imagesBandMap";
import { useMomentBand } from "@hooks/menu/calendar/useMomentBand";
import theme from "@themes/index";
import { ImageBackground, StyleSheet } from "react-native";

interface MomentBandProps extends DayMomentType {
  day: string;
  index: number;
  currentIndex: number;
  todayIndex: number;
}

export default function MomentBand({
  momentSelected,
  day,
  index,
  currentIndex,
  todayIndex,
}: MomentBandProps) {
  const { momentLabel, key } = useMomentBand({
    momentSelected,
    day,
    index,
    currentIndex,
    todayIndex,
  });

  return (
    <ImageBackground
      source={imagesMap[key]}
      resizeMode="cover"
      style={styles.container}
    >
      <AppText style={styles.dayMomentText}>{momentLabel}</AppText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dayMomentText: {
    marginBottom: 300,
    transform: [{ rotate: "-90deg" }],
    textTransform: "uppercase",
    color: theme.properties.white,
    fontWeight: theme.properties.bold,
    fontSize: 64,
    textAlign: "center",
    width: 200,
    lineHeight: 64,
  },
});
