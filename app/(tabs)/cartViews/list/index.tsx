import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import AppButton from "@components/molecules/global/AppButton";
import IngredientsElementList from "@components/organisms/cart/list/IngredientsElementList";

export default function ListView() {
  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/cart_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      {/* <AppText style={styles.text}>Aucun ingrédient dans la liste</AppText>
      <AppButton text="Générer la liste de courses" onPress={() => {}} /> */}
      <ScrollView
        style={styles.ingredientsList}
        showsVerticalScrollIndicator={false}
      >
        <IngredientsElementList ingredient={{ name: "Tomate", quantityStock: 2, quantityNeed: 5 }} />
        <IngredientsElementList ingredient={{ name: "Tomate", quantityStock: 2, quantityNeed: 5 }} />
        <IngredientsElementList ingredient={{ name: "Tomate", quantityStock: 2, quantityNeed: 5 }} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ingredientsList: {
    padding: 16,
  },
});
