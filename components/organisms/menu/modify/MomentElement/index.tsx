import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

interface MomentElementProps {
  moment: string;
}

export default function MomentElement({moment} : MomentElementProps) {
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <View style={styles.header}>
        <AppText style={styles.momentTitle}>{moment}</AppText>
        <AppButton icon="add" iconSize={26} style={styles.addButton} orange />
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
