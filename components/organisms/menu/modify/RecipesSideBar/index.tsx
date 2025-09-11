import { View, StyleSheet, Pressable } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { AppText } from "@components/atoms/global/Texts";
import ReturnButton from "@components/molecules/menu/modify/ReturnButton";
import RecipeTypeButton from "@components/molecules/menu/modify/RecipeTypeButton";

interface RecipesSideBarProps {
  momentSelected: "Matin" | "Midi" | "Soir" | undefined;
  setIsDarkScreenVisible: (visible: boolean) => void;
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir" | undefined) => void;
}

export default function RecipesSideBar({
  momentSelected,
  setIsDarkScreenVisible,
  setMomentSelected,
}: RecipesSideBarProps) {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AppText>{momentSelected}</AppText>
      <RecipeTypeButton type="accompaniments" />
      <ReturnButton text="Fermer" action={() => setIsDarkScreenVisible(false)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 154,
    height: "100%",
    backgroundColor: theme.properties.beige,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
