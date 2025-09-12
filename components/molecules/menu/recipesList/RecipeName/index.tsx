import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { recipeTypes } from "@constants/recipeTypes";

interface RecipeNameProps {
  recipe: {
    id: number;
    name: string;
    type: string;
    image: any;
    number: number;
  };
}

export default function RecipeName({ recipe }: RecipeNameProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginRight: 12,
      marginLeft: 4,
      height: 56,
    },
    name: {
      fontSize: 18,
      fontWeight: theme.properties.medium,
      flexShrink: 1,
    },
    imageContainer: {
      width: 56,
      height: 56,
      marginRight: 12,
      borderRadius: 100,
    },
    image: {
      width: 56,
      height: 56,
      borderRadius: 100,
      borderColor: recipeTypes[recipe.type]?.color.normal.background,
      borderWidth: 3.5,
    },
  });
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, globalStyles.littleShadow]}>
        <Image source={recipe.image} style={styles.image} />
      </View>
      <AppText style={styles.name}>{recipe.name}</AppText>
    </View>
  );
}
