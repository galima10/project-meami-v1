import {
  View,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Image } from "expo-image";
import { AppText } from "@components/atoms/global/Texts";
import { recipeTypes } from "@constants/recipeTypes";
import { globalStyles } from "@themes/styles";
import { useState } from "react";
import theme from "@themes/index";

interface RecipeCardProps {
  selectedRecipeType: string | undefined;
  recipe: {
    id: number;
    name: string;
    type: string;
    image: any;
    number: number;
  };
  style?: StyleProp<ViewStyle>;
  displayed?: boolean;
}

type LocalMenu = {
  name: string;
  type: string;
  image: any;
  number: number;
};

export default function RecipeCard({
  selectedRecipeType,
  recipe,
  style,
  displayed = false,
}: RecipeCardProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const recipeType = recipeTypes[selectedRecipeType || ""];
  const [localMenu, setLocalMenu] = useState<LocalMenu>({
    name: recipe.name,
    type: recipe.type,
    image: recipe.image,
    number: recipe.number,
  });

  const styles = StyleSheet.create({
    container: {
      padding: 8,
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 8,
      marginHorizontal: 4,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 100,
      opacity: isPressed ? 0.9 : 1,
      borderColor: isPressed
        ? recipeType.color.pressed.background
        : recipeType.color.normal.background,
      borderWidth: 4,
    },
    imageContainer: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "transparent",
      borderColor: isPressed
        ? recipeType.color.pressed.border
        : recipeType.color.normal.border,
      borderWidth: 1,
      borderRadius: 100,

      position: "relative",
    },
    indicator: {
      position: "absolute",
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.properties.white,
      borderColor: theme.properties.whiteBorder,
      borderWidth: 1,
      borderRadius: 100,
      padding: 2,
    },
    indicatorText: {
      fontSize: 14,
      fontWeight: theme.properties.semibold,
      lineHeight: 12,
    },
    text: {
      fontSize: 16,
      marginTop: 8,
      textAlign: "center",
      opacity: isPressed ? 0.5 : 1,
    },
  });

  const handlePressSideBar = () => {
    if (localMenu.number <= 0) return;
    setLocalMenu({ ...localMenu, number: localMenu.number - 1 });
    setDisabled(true);
  };

  const handlePressDisplay = () => {
    setDisabled(false);
    setLocalMenu({ ...localMenu, number: localMenu.number + 1 });
  };

  return (
    <Pressable
      style={[styles.container, style]}
      onPressIn={() => !displayed && setIsPressed(true)}
      onPressOut={() => !displayed && setIsPressed(false)}
      onPress={() => (!displayed ? handlePressSideBar() : handlePressDisplay())}
      disabled={disabled}
    >
      <View>
        <View
          style={[
            styles.imageContainer,
            globalStyles.littleShadow,
            disabled && { opacity: 0.5 },
          ]}
        >
          <Image
            style={styles.image}
            source={require("@assets/images/requires/ingredient_recipe_3x.png")}
          />
        </View>
        {!displayed ? (
          <View
            style={[
              styles.indicator,
              { bottom: 0, left: 0 },
              globalStyles.littleShadow,
            ]}
          >
            <AppText style={styles.indicatorText}>{localMenu.number}</AppText>
          </View>
        ) : (
          <Pressable
            style={[
              styles.indicator,
              { top: 0, right: 0 },
              globalStyles.littleShadow,
            ]}
            onPress={handlePressDisplay}
          >
            <AppText
              style={[
                styles.indicatorText,
                {
                  color: theme.properties.darkRed,
                  fontWeight: theme.properties.bold,
                  fontSize: 28,
                  marginBottom: 2,
                },
              ]}
            >
              -
            </AppText>
          </Pressable>
        )}
      </View>
      <AppText style={[styles.text, disabled && { opacity: 0.5 }]}>
        {localMenu.name}
      </AppText>
    </Pressable>
  );
}
