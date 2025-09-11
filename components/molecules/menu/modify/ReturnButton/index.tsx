import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import Icon from "@components/atoms/global/Icon";
import theme from "@themes/index";
import { useState } from "react";

interface ReturnButtonProps {
  action: () => void;
  text: string;
}

export default function ReturnButton({
  action,
  text,
}: ReturnButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={styles.button}
      onPress={action}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Icon name="return" size={40} style={[isPressed && { opacity: 0.5 }]} />
      <AppText style={[styles.text, isPressed && { opacity: 0.5 }]}>{text}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: theme.properties.semibold,
    borderBottomColor: theme.properties.brown,
    borderBottomWidth: 1.5,
    textAlign: "center",
    marginTop: 2,
  },
});
