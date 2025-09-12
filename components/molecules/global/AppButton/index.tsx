import Icon from "@components/atoms/global/Icon";
import { AppText } from "@components/atoms/global/Texts";
import { useAppButton } from "@hooks/global/useAppButton";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface AppButtonProps extends PressableProps {
  text?: string;
  icon?: string;
  type?: "primary" | "secondary";
  action?: () => void;
  style?: StyleProp<ViewStyle>;
  red?: boolean;
  orange?: boolean;
  iconSize?: number;
}

export default function AppButton({
  text,
  icon,
  type = "primary",
  action,
  style,
  red,
  orange,
  iconSize = 24,
  ...props
}: AppButtonProps) {
  const { handlePressIn, handlePressOut, secondaryColor, isPressed } =
    useAppButton(type);

  const primaryContainerStyles = StyleSheet.flatten([
    orange
      ? globalStyles.buttonOrange
      : red
      ? globalStyles.buttonRed
      : globalStyles.buttonGreen,
    globalStyles.littleShadow,
    isPressed &&
      (orange
        ? globalStyles.buttonOrangePressed
        : red
        ? globalStyles.buttonRedPressed
        : globalStyles.buttonGreenPressed),
  ]);

  return (
    <Pressable
      style={[
        styles.button,
        text && { paddingHorizontal: 20, paddingVertical: 8 },
        type === "primary" && primaryContainerStyles,
        style,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={action}
      {...props}
    >
      {text && (
        <AppText
          style={[
            styles.text,
            type === "secondary"
              ? {
                  color: secondaryColor,
                  borderBottomWidth: 2,
                  borderBottomColor: secondaryColor,
                }
              : styles.primary,
          ]}
        >
          {text}
        </AppText>
      )}

      {icon && (
        <Icon
          style={text && { marginLeft: 6 }}
          name={icon}
          size={iconSize}
          color={type === "secondary" ? secondaryColor : theme.properties.beige}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    minHeight: 32,
    borderRadius: 50,
    alignSelf: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  primary: {
    textShadowColor: "rgba(0, 0, 0, 0.4)", // couleur
    textShadowRadius: 15, // flou
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: theme.properties.semibold,
    color: theme.properties.beige,
  },
});
