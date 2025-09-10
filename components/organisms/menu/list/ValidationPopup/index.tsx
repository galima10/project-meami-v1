import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import LargeButton from "@components/molecules/global/LargeButton";
import { mockedMenuEmpty } from "@constants/mockedMenu";

interface ValidationPopupProps {
  setIsDarkScreenVisible: (visible: boolean) => void;
  setMenu: (menu: typeof mockedMenuEmpty) => void;
}

export default function ValidationPopup({
  setIsDarkScreenVisible,
  setMenu,
}: ValidationPopupProps) {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <LargeButton
        text="Vider sans retirer d'ingrédients"
        action={() => {
          setMenu(mockedMenuEmpty);
          setIsDarkScreenVisible(false);
        }}
        style={styles.primaryButtons}
      />
      <LargeButton
        text="Vider et valider le retrait des ingrédients"
        red
        action={() => {
          setMenu(mockedMenuEmpty);
          setIsDarkScreenVisible(false);
        }}
        style={styles.primaryButtons}
      />
      <View style={styles.separator} />
      <LargeButton
        text="Annuler"
        type="secondary"
        action={() => setIsDarkScreenVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.properties.beige,
    borderRadius: 16,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    padding: 16,
  },
  primaryButtons: {
    borderRadius: 12,
    alignSelf: "stretch",
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: theme.properties.beigeBorder,
    marginTop: 8,
  },
});
