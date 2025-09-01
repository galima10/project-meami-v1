import { View, StyleSheet } from "react-native";
import MomentButton from "@components/molecules/calendar/MomentButton";

interface MomentModuleProps {
  momentSelected: "morning" | "noon" | "evening";
  setMomentSelected: React.Dispatch<React.SetStateAction<"morning" | "noon" | "evening">>;
}

export default function MomentModule({momentSelected, setMomentSelected}: MomentModuleProps) {

  return (
    <View style={styles.container}>
      <MomentButton moment="morning" setMomentSelected={setMomentSelected} isActive={momentSelected === "morning"} />
      <MomentButton moment="noon" setMomentSelected={setMomentSelected} isActive={momentSelected === "noon"} />
      <MomentButton moment="evening" setMomentSelected={setMomentSelected} isActive={momentSelected === "evening"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
