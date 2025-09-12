import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { StyleSheet, View, ScrollView } from "react-native";
import AppButton from "@components/molecules/global/AppButton";
import MomentElement from "../MomentElement";

interface DaySlideProps {
  day?: string;
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir") => void;
  setIsDarkScreenVisible: (visible: boolean) => void;
  momentSelected: "Matin" | "Midi" | "Soir" | undefined;
  setSelectedRecipeType: (type: string | undefined) => void;
}

export default function DaySlide({
  day,
  setMomentSelected,
  setIsDarkScreenVisible,
  momentSelected,
  setSelectedRecipeType,
}: DaySlideProps) {
  const mockedRecipesList = [
    {
      id: 1,
      name: "Pâtes asperges au citron",
      type: "meats",
      image: require("@assets/images/requires/ingredient_recipe_3x.png"),
      number: 2,
    },
    {
      id: 2,
      name: "Pâtes asperges au citron",
      type: "meats",
      image: require("@assets/images/requires/ingredient_recipe_3x.png"),
      number: 2,
    },
    {
      id: 3,
      name: "Pâtes asperges au citron",
      type: "meats",
      image: require("@assets/images/requires/ingredient_recipe_3x.png"),
      number: 2,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppButton
          icon="trash"
          type="secondary"
          iconSize={40}
          style={styles.trashButton}
        />
        <AppText style={styles.dayTitle}>{day}</AppText>
      </View>
      <ScrollView
        style={styles.momentContainer}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <MomentElement
          moment="Matin"
          setMomentSelected={setMomentSelected}
          setIsDarkScreenVisible={setIsDarkScreenVisible}
          isActive={momentSelected === "Matin"}
          setSelectedRecipeType={setSelectedRecipeType}
          recipes={mockedRecipesList}
        />
        <MomentElement
          moment="Midi"
          setMomentSelected={setMomentSelected}
          setIsDarkScreenVisible={setIsDarkScreenVisible}
          isActive={momentSelected === "Midi"}
        />
        <MomentElement
          moment="Soir"
          setMomentSelected={setMomentSelected}
          setIsDarkScreenVisible={setIsDarkScreenVisible}
          isActive={momentSelected === "Soir"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 60,
  },
  trashButton: {
    position: "absolute",
    left: 24,
    padding: 4,
  },
  momentContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
