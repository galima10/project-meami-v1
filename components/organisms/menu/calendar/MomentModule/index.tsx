import { View, StyleSheet } from "react-native";
import MomentButton from "@components/molecules/menu/calendar/MomentButton";

interface MomentModuleProps {
  momentSelected: "morning" | "noon" | "evening";
  setMomentSelected: React.Dispatch<React.SetStateAction<"morning" | "noon" | "evening">>;
  handleInteraction: () => void;
}

export default function MomentModule({momentSelected, setMomentSelected, handleInteraction}: MomentModuleProps) {

  return (
    <View>
      <MomentButton handleInteraction={handleInteraction} moment="morning" setMomentSelected={setMomentSelected} isActive={momentSelected === "morning"} />
      <MomentButton handleInteraction={handleInteraction} moment="noon" setMomentSelected={setMomentSelected} isActive={momentSelected === "noon"} />
      <MomentButton handleInteraction={handleInteraction} moment="evening" setMomentSelected={setMomentSelected} isActive={momentSelected === "evening"} />
    </View>
  );
}
