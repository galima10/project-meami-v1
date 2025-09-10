import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { Link } from "expo-router";
import { useState } from "react";

interface RecipeElementMenuProps {
  recipe: string;
  handleInteraction: () => void;
}

export default function RecipeElementMenu({ recipe, handleInteraction }: RecipeElementMenuProps) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    //   <Link href={`/recipes/${recipe}`} asChild>
    //     <AppText style={styles.title}>{recipe}</AppText>
    //   </Link>
    <Pressable
      style={styles.container}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handleInteraction}
    >
      <AppText style={[styles.text, isPressed && { opacity: 0.5 }]}>
        {recipe}
        </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "center"
  },
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
