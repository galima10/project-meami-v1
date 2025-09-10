import AppButton from "@components/molecules/global/AppButton";
import { mockedMenuEmpty } from "@constants/mockedMenu";
import { useMenu } from "@contexts/MenuContext";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

interface ValidationPopupProps {
  setIsDarkScreenVisible: (visible: boolean) => void;
}

export default function ValidationPopup({
  setIsDarkScreenVisible,
}: ValidationPopupProps) {
  const { setMenu } = useMenu();
  const router = useRouter();
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AppButton
        text="Vider sans retirer d'ingrédients"
        action={() => {
          setMenu(mockedMenuEmpty);
          setIsDarkScreenVisible(false);
        }}
        style={styles.primaryButtons}
      />
      <AppButton
        text="Vider et valider le retrait des ingrédients"
        red
        action={() => {
          setMenu(mockedMenuEmpty);
          setIsDarkScreenVisible(false);
          router.push("/stockViews/ingredients");
        }}
        style={styles.primaryButtons}
      />
      <View style={styles.separator} />
      <AppButton
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
