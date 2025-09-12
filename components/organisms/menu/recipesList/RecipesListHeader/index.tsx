import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import AppButton from "@components/molecules/global/AppButton";
import { useMenu } from "@contexts/MenuContext";
import { mockedMenu } from "@constants/mockedMenu";

interface RecipesListHeaderProps {
  recipeLength: number;
  setIsDarkScreenVisible: (visible: boolean) => void;
  setSelectedPanel: (panel: "ingredientsList" | "addRecipe" | null) => void;
}

export default function RecipesListHeader({
  recipeLength,
  setIsDarkScreenVisible,
  setSelectedPanel,
}: RecipesListHeaderProps) {
  const { setMenu } = useMenu();
  return (
    <View style={styles.header}>
      <AppText style={styles.title}>Recettes</AppText>
      <AppText style={styles.entryText}>
        {recipeLength ? recipeLength : "0"} entrées
      </AppText>
      <View style={styles.buttonsContainer}>
        <AppButton icon="trash" type="secondary" iconSize={40} />
        <AppButton
          icon="add"
          iconSize={24}
          style={styles.addButton}
          // action={() => setMenu(mockedMenu)}
          action={() => {
            setIsDarkScreenVisible(true);
            setSelectedPanel("addRecipe");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontWeight: theme.properties.bold,
    fontSize: 28,
    lineHeight: 40,
    color: theme.properties.darkGreen,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    padding: 8,
    marginLeft: 12,
  },
  entryText: {
    color: theme.properties.lightOrange,
    fontWeight: theme.properties.medium,
    fontSize: 16,
  },
});
