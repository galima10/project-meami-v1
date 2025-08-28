import { Pressable, StyleSheet } from "react-native";
import Icon from "@components/atoms/global/Icon";
import { globalStyles } from "@themes/styles";
import theme from "@themes/index";

const AddInfo = () => {
  return (
    <Pressable
      style={[
        globalStyles.buttonBase,
        globalStyles.littleShadow,
        styles.button,
      ]}
    >
      <Icon name="add" color={theme.properties.beige} size={32} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.properties.darkGreen,
    borderColor: theme.properties.borderColor,
    borderWidth: 1,
  },
});

export default AddInfo;
