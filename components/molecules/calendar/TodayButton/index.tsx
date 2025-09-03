import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

interface TodayButtonProps {
  setHasInteracted: (interacted: boolean) => void;
}

export default function TodayButton({
  setHasInteracted,
}: TodayButtonProps) {
  const todayStyles = StyleSheet.flatten([
    styles.button,
    globalStyles.littleShadow,
  ]);
  return (
    <Pressable
    //   style={todayStyles}
      style={({ pressed }) => [
        todayStyles,
        pressed && { backgroundColor: theme.properties.lightRed, borderColor: theme.properties.lightRedBorder },
      ]}
      onPress={() => {
        setHasInteracted(false);
      }}
    >
      <AppText style={styles.buttonText}>Auj.</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    backgroundColor: theme.properties.darkRed,
    borderColor: theme.properties.redBorder,
    borderWidth: 2,
    borderRadius: theme.properties.buttonRadius,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.properties.beige,
    fontSize: 20,
    fontWeight: theme.properties.bold,
    lineHeight: 24,
  },
});
