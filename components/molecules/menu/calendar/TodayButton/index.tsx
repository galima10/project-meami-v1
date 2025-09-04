import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { useTodayButton } from "@hooks/calendar/useTodayButton";
import { useSmoothProgress } from "@hooks/animations/calendar/TodayButton/useSmoothProgress";

interface TodayButtonProps {
  setHasInteracted: (interacted: boolean) => void;
  countdown: number | null;
  resetProgressKey: number;
  forceRefresh: () => void;
}

export default function TodayButton({
  setHasInteracted,
  countdown,
  resetProgressKey,
  forceRefresh
}: TodayButtonProps) {
  const { localCountdown, handlePressIn, handlePressOut, isPressed } =
    useTodayButton(countdown, setHasInteracted, forceRefresh);

  const todayStyles = StyleSheet.flatten([
    styles.button,
    globalStyles.littleShadow,
    isPressed && {
      backgroundColor: theme.properties.lightRed,
      borderColor: theme.properties.lightRedBorder,
    },
  ]);

  const smoothProgress = useSmoothProgress(localCountdown, 15, resetProgressKey);

  return (
    <Pressable
      style={todayStyles}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View
        style={[
          styles.chargementBackground,
          localCountdown !== null && {
            width: `${smoothProgress}%`,
          },
          (isPressed || localCountdown === 0) && { opacity: 0 },
        ]}
      ></View>
      <AppText style={styles.buttonText}>Auj.</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    backgroundColor: theme.properties.darkRed,
    borderColor: theme.properties.redBorder,
    borderWidth: 2,
    borderRadius: theme.properties.buttonRadius,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonText: {
    color: theme.properties.beige,
    fontSize: 20,
    fontWeight: theme.properties.bold,
    lineHeight: 24,
  },
  chargementBackground: {
    height: "100%",
    width: "0%",
    backgroundColor: theme.properties.lightRed,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
