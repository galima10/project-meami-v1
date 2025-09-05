import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";

interface MomentElementProps {
  menu?: string[];
  moment: "Matin" | "Midi" | "Soir";
}

export default function MomentElement({ menu, moment }: MomentElementProps) {
  return (
    <AppText style={styles.text}>
      <AppText style={styles.title}>{moment} : </AppText>
      {menu?.join(" • ") ?? "----"}
    </AppText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 6,
  },
  title: {
    fontWeight: theme.properties.medium,
    color: theme.properties.darkOrange,
  },
});
