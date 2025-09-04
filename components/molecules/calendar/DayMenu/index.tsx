import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { LinearGradient } from "expo-linear-gradient";
import theme from "@themes/index";
import { FrenchDayOfWeek } from "@utils/getDate";
import { dayColors } from "@utils/getDate";

interface DayMenuProps {
  day: FrenchDayOfWeek;
}
export default function DayMenu({day}: DayMenuProps) {
  return (
    <View style={styles.container}>
      {/* <AppText>Texte</AppText> */}
      <LinearGradient
        colors={["transparent", dayColors[day]]}
        locations={[0.5, 1]}
        style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <AppText style={{fontSize: 16 }}>
          Non renseigné
        </AppText>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.properties.beige,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
