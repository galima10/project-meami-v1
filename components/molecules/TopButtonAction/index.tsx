import { Pressable, StyleSheet } from "react-native";
import Icon from "@components/atoms/global/Icon";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";

interface AddInfoProps {
  icon: string;
  withStroke?: boolean;
}

export default function AddInfo({ icon, withStroke }: AddInfoProps) {
  return (
    <Pressable
      style={[
        globalStyles.buttonBase,
        globalStyles.littleShadow,
        styles.button,
      ]}
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.properties.darkGreen,
    borderColor: theme.properties.borderColor,
    borderWidth: 1,
  },
});
