import AppButton from "@components/molecules/global/AppButton";
import DarkScreenContainer from "@components/organisms/global/DarkScreenContainer";
import MenuList from "@components/organisms/menu/list/MenuList";
import ValidationPopup from "@components/organisms/menu/list/ValidationPopup";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function ListView() {
  const router = useRouter();
  const [isDarkScreenVisible, setIsDarkScreenVisible] = useState(false);

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <View style={styles.buttonsContainer}>
        <AppButton
          text="Liste des recettes"
          action={() => router.push("/menuViews/recipesList")}
        />
        <AppButton
          text="Vider le menu"
          icon="trash"
          type="secondary"
          action={() => setIsDarkScreenVisible(true)}
        />
      </View>
      <MenuList />
      <DarkScreenContainer visible={isDarkScreenVisible}>
        <ValidationPopup setIsDarkScreenVisible={setIsDarkScreenVisible} />
      </DarkScreenContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginVertical: 16,
  },
});
