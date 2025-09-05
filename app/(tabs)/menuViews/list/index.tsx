import { View, StyleSheet, ImageBackground } from "react-native";
import LargeButton from "@components/molecules/global/LargeButton";
import { useRouter } from "expo-router";
import MenuList from "@components/organisms/menu/list/MenuList";
import { useMenu } from "@contexts/MenuContext";
import { mockedMenuEmpty } from "@constants/mockedMenu";


export default function ListView() {
  const router = useRouter();
  const { setMenu } = useMenu();

  return (
    <ImageBackground
      source={require("@assets/images/precharged/background/menu_3x.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      <View style={styles.buttonsContainer}>
        <LargeButton
          text="Liste des recettes"
          action={() => router.push("/menuViews/recipesList")}
        />
        <LargeButton text="Vider le menu" icon="trash" type="secondary" action={() => setMenu(mockedMenuEmpty)} />
      </View>
      <MenuList />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginVertical: 16,
  },
});
