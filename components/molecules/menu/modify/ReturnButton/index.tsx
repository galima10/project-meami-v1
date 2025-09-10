import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import Icon from "@components/atoms/global/Icon";
import theme from "@themes/index";

interface ReturnButtonProps {
  action: () => void;
  text: string;
}

export default function ReturnButton({
  action,
  text,
}: ReturnButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        action();
      }}
    >
      <Icon name="return" size={32} />
      <AppText style={styles.text}>{text}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#F0F0F0",
  },
  text: {
    fontSize: 16,
    fontWeight: theme.properties.semibold,
    borderBottomColor: theme.properties.brown,
    borderBottomWidth: 1.5,
    textAlign: "center",
    marginTop: 4,
  },
});
