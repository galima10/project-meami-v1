import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { AppText } from "@components/atoms/global/Texts";
import CounterInput from "@components/molecules/global/CounterInput";

export default function RecipeElement() {
  return (
    <View style={styles.container}>
      <CounterInput />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // Styles for the recipe element container
  },
});
