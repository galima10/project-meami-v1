import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import AddRemoveButton from "@components/molecules/global/AddRemoveButton";
import { AppText } from "@components/atoms/global/Texts";
import { globalStyles } from "@themes/styles";

interface IngredientsElementListProps {
  ingredient: { name: string; quantityStock: number; quantityNeed: number } | null;
}

export default function IngredientsElementList({ ingredient }: IngredientsElementListProps) {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AppText style={styles.ingredientName}>{ingredient?.name}</AppText>
      <AppText style={styles.quantityText}>{ingredient?.quantityStock}/{ingredient?.quantityNeed} unités</AppText>
      <View style={styles.addModule}>
        <AddRemoveButton type="remove" />
        <AddRemoveButton type="add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 16,
    marginBottom: 12,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1,
  },
  addModule: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: theme.properties.medium,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: theme.properties.regular,
    color: theme.properties.darkGreen,
  },
});
