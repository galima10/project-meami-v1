import NavigationDot from "@components/atoms/menu/global/NavigationDot";
import { days } from "@utils/getDate";
import { StyleSheet, View } from "react-native";

interface ModifyNavigationDotsModuleProps {
  currentIndex: number;
}

export default function ModifyNavigationDotsModule({
  currentIndex,
}: ModifyNavigationDotsModuleProps) {
  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <NavigationDot
          key={index}
          index={index}
          currentIndex={currentIndex}
          action={() => {
            // handleDotPress(index)
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
});
