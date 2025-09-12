import { Pressable, StyleSheet } from "react-native";
import Icon from "@components/atoms/global/Icon";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";

interface TopButtonActionProps {
  icon: string;
  withStroke?: boolean;
  action?: () => void;
}

export default function TopButtonAction({ icon, withStroke, action }: TopButtonActionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.buttonBase,
        globalStyles.littleShadow,
        globalStyles.buttonGreen,
        pressed && globalStyles.buttonGreenPressed,
      ]}
      onPress={action}
    >
      <Icon
        name={icon}
        color={theme.properties.beige}
        size={32}
        withStroke={withStroke}
      />
    </Pressable>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: theme.properties.darkGreen,
//     borderColor: theme.properties.greenBorder,
//     borderWidth: 1.5,
//   },
// });
