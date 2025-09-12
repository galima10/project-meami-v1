import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@themes/index";
import RecipeElement from "../RecipeElement";

export default function RecipesListContent() {
  return (
    <ScrollView style={styles.container}>
      <RecipeElement />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: theme.properties.white,
  },
});
