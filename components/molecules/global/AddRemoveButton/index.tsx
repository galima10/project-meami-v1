import { View, StyleSheet, Pressable } from "react-native";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import { globalStyles } from "@themes/styles";

interface AddRemoveButtonProps {
  type: "add" | "remove";
  action?: () => void;
}
export default function AddRemoveButton({
  type,
  action,
}: AddRemoveButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        globalStyles.littleShadow,
        pressed && {
          backgroundColor: theme.properties.beige,
          borderColor: theme.properties.beigeBorder,
        },
      ]}
      onPress={action}
    >
      <AppText style={styles.text}>{type === "add" ? "+" : "-"}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 40,
    borderRadius: theme.properties.buttonRadius,
    backgroundColor: theme.properties.vibrantBeige,
    borderColor: theme.properties.vibrantBeigeBorder,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 16,
    fontWeight: theme.properties.semibold,
  },
});
