import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";

export default function MomentElement() {
  return (
    <View style={styles.container}>
      <AppText>Moment Element</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.properties.beige,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: "100%",
  },
});
