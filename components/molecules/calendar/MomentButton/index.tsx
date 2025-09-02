import { View, StyleSheet, Pressable } from "react-native";
import Icon from "@components/atoms/global/Icon";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

interface MomentButtonProps {
  moment: "morning" | "noon" | "evening";
  isActive: boolean;
  setMomentSelected: React.Dispatch<
    React.SetStateAction<"morning" | "noon" | "evening">
  >;
  handleInteraction: () => void;
}

export default function MomentButton({
  moment,
  isActive,
  setMomentSelected,
  handleInteraction,
}: MomentButtonProps) {
  const buttonContainerStyle = StyleSheet.flatten([
    styles.buttonContainer,
    globalStyles.littleShadow,
    isActive && { opacity: 1 },
  ]);
  const buttonStyle = StyleSheet.flatten([
    styles.button,
    isActive && { borderColor: theme.properties.vibrantOrange },
  ]);
  return (
    <Pressable
      style={buttonContainerStyle}
      onPress={() => {
        setMomentSelected(moment);
        handleInteraction();
      }}
    >
      <View style={buttonStyle}>
        <Icon name={moment} size={40} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    borderRadius: theme.properties.buttonRadius,
    marginVertical: 8,
    borderColor: theme.properties.borderColor,
    borderWidth: 0.5,
    alignSelf: "flex-start",
    opacity: 0.5,
  },
  button: {
    borderRadius: theme.properties.buttonRadius,
    overflow: "hidden",
    borderColor: theme.properties.white,
    borderWidth: 3.5,
  },
});
