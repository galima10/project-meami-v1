import { View, StyleSheet } from "react-native";
import MomentButton from "@components/molecules/calendar/MomentButton";

export default function MomentModule() {
  return (
    <View style={styles.container}>
      <MomentButton moment="morning" />
      <MomentButton moment="noon" />
      <MomentButton moment="night" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
