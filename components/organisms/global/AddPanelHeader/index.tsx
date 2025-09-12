import { View, StyleSheet } from "react-native";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";
import InputBar from "@components/organisms/global/InputBar";
import PickerSorter from "../PickerSorter";

interface AddPanelHeaderProps {
  setIsDarkScreenVisible: (visible: boolean) => void;
  setInputMode: (mode: "search" | "sorter") => void;
  inputMode: "search" | "sorter";
}

export default function AddPanelHeader({
  setIsDarkScreenVisible,
  setInputMode,
  inputMode,
}: AddPanelHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputBarContainer}>
        {inputMode === "search" ? <InputBar /> : <PickerSorter />}

        <AppButton
          icon="switch"
          iconSize={24}
          style={styles.switchButton}
          action={() =>
            setInputMode(inputMode === "search" ? "sorter" : "search")
          }
        />
      </View>
      <AppButton
        icon="close"
        iconSize={24}
        style={styles.closeButton}
        red
        action={() => setIsDarkScreenVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBarContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 24,
  },
  closeButton: {
    padding: 8,
    borderRadius: theme.properties.buttonRadius,
    marginLeft: 24,
  },
  switchButton: {
    padding: 4,
    borderRadius: theme.properties.buttonRadius,
  },
});
