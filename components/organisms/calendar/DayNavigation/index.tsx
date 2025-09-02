import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";

interface DayNavigationProps {
  actualDay:
    | "lundi"
    | "mardi"
    | "mercredi"
    | "jeudi"
    | "vendredi"
    | "samedi"
    | "dimanche";
  goToSlide: (index: number) => void;
  currentIndex: number;
  setMomentSelected?: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
}

export default function DayNavigation({
  actualDay,
  goToSlide,
  currentIndex,
  setMomentSelected,
}: DayNavigationProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          goToSlide(currentIndex - 1);
          setMomentSelected?.("morning");
        }}
      >
        <AppText style={styles.buttonText}>◀</AppText>
      </Pressable>
      <AppText style={styles.dayTitle}>{actualDay}</AppText>
      <Pressable
        style={styles.button}
        onPress={() => {
          goToSlide(currentIndex + 1);
          setMomentSelected?.("morning");
        }}
      >
        <AppText style={styles.buttonText}>▶</AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 32,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 32,
    // opacity: 0.25,
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
  },
});
