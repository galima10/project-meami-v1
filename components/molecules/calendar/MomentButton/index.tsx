import { View, StyleSheet, Pressable } from "react-native";
import Icon from "@components/atoms/global/Icon";
import theme from "@themes/index";

interface MomentButtonProps {
  moment: "morning" | "noon" | "night";
}

export default function MomentButton({ moment }: MomentButtonProps) {
  return (
    <Pressable style={styles.button}>
      <Icon name={moment} size={40} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: theme.properties.buttonRadius,
    overflow: "hidden",
    margin: 8,
    borderColor: theme.properties.white,
    borderWidth: 3,
  },
});
