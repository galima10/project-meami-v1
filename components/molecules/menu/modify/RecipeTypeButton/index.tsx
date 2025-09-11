import { View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { recipeTypes } from "@constants/recipeTypes";

export default function RecipeTypeButton({ type }: { type: string }) {
  const recipe = recipeTypes[type || ""];

  const styles = StyleSheet.create({
    button: {
      padding: 8,
      backgroundColor: recipe.color.normal.background,
      borderColor: recipe.color.normal.border,
      borderWidth: 1.5,
      borderRadius: 16,
      alignItems: "center",
      minHeight: 170,
      // alignSelf: "center",
    },
    image: {
      width: 100,
      height: 90,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      color: theme.properties.white,
      fontWeight: theme.properties.semibold,
      textAlign: "center",
      marginVertical: 8,
      textShadowColor: "rgba(0, 0, 0, 0.5)", // couleur
      textShadowRadius: 15, // flou
    },
  });

  return (
    <Pressable style={[styles.button, globalStyles.bigShadow]}>
      <Image source={recipe.imageSource} style={styles.image} />
      <AppText style={styles.text}>{recipe.title}</AppText>
    </Pressable>
  );
}
