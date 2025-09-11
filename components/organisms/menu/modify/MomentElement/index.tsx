import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

interface MomentElementProps {
  moment: "Matin" | "Midi" | "Soir";
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir") => void;
  setIsDarkScreenVisible: (visible: boolean) => void;
  isActive: boolean;
}

export default function MomentElement({moment, setMomentSelected, setIsDarkScreenVisible, isActive} : MomentElementProps) {
  return (
    <View style={[styles.container, globalStyles.bigShadow, isActive && { borderColor: theme.properties.vibrantOrange }]}>
      <View style={styles.header}>
        <AppText style={styles.momentTitle}>{moment}</AppText>
        <AppButton icon="add" iconSize={26} style={styles.addButton} orange onPress={() => {
          setMomentSelected(moment);
          setIsDarkScreenVisible?.(true);
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    marginVertical: 8,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  momentTitle: {
    fontWeight: theme.properties.semibold,
    fontSize: 24,
    lineHeight: 40,
    textTransform: "capitalize",
  },
  addButton: {
    padding: 6,
  },
});
