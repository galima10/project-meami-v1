import { View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { recipeTypes } from "@constants/recipeTypes";

interface RecipeTypeButtonProps {
  type: string;
  action?: () => void;
}

export default function RecipeTypeButton({
  type,
  action,
}: RecipeTypeButtonProps) {
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
      marginVertical: 16,
      marginHorizontal: 16,
    },
    image: {
      width: 100,
      height: 90,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      color: recipe.color.text,
      fontWeight: theme.properties.semibold,
      textAlign: "center",
      marginVertical: 8,
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        globalStyles.bigShadow,
        pressed && {
          backgroundColor: recipe.color.pressed.background,
          borderColor: recipe.color.pressed.border,
        },
      ]}
      onPress={action}
    >
      <Image source={recipe.imageSource} style={styles.image} />
      <AppText
        style={[
          styles.text,
          type !== "ingredients" && {
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowRadius: 10,
          },
        ]}
      >
        {recipe.title}
      </AppText>
    </Pressable>
  );
}
