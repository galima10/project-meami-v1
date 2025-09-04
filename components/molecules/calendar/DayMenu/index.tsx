import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import { LinearGradient } from "expo-linear-gradient";
import theme from "@themes/index";
export default function DayMenu() {
  return (
    <View style={styles.container}>
      {/* <AppText>Texte</AppText> */}
      <LinearGradient
        colors={["transparent", "#fc4545ca"]}
        locations={[0.5, 1]}
        style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <AppText style={{fontSize: 20 }}>
          Hello gradient!
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
