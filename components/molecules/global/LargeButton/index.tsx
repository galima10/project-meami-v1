import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import Icon from "@components/atoms/global/Icon";
import { useState } from "react";
import { globalStyles } from "@themes/styles";
import { useLargeButton } from "@hooks/global/useLargeButton";

interface LargeButtonProps {
  text: string;
  icon?: string;
  type?: "primary" | "secondary";
  action?: () => void;
}

export default function LargeButton({
  text,
  icon,
  type = "primary",
  action,
}: LargeButtonProps) {
  const {
    handlePressIn,
    handlePressOut,
    secondaryColor,
    isPressed
  } = useLargeButton(type);

  const primaryContainerStyles = StyleSheet.flatten([
    globalStyles.buttonGreen,
    globalStyles.littleShadow,
    isPressed && globalStyles.buttonGreenPressed,
  ]);


  return (
    <Pressable
      style={[styles.button, type === "primary" && primaryContainerStyles]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={action}
    >
      <View>
        <AppText
          style={[
            styles.text,
            type === "secondary" ? { color: secondaryColor, borderBottomWidth: 2, borderBottomColor: secondaryColor } : styles.primary,
          ]}
        >
          {text}
        </AppText>
      </View>
      {icon && (
        <Icon
          style={{ marginLeft: 6 }}
          name={icon}
          size={24}
          color={secondaryColor}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    maxHeight: 48,
    borderRadius: 50,
  },
  primary: {
    textShadowColor: "rgba(0, 0, 0, 0.4)", // couleur
    textShadowRadius: 20, // flou
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: theme.properties.semibold,
    color: theme.properties.beige,
  },
});
