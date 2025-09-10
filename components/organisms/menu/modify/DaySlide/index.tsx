import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { StyleSheet, View, ScrollView } from "react-native";
import AppButton from "@components/molecules/global/AppButton";
import MomentElement from "./MomentElement";

interface DaySlideProps {
  day?: string;
}

export default function DaySlide({ day }: DaySlideProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppButton
          icon="trash"
          type="secondary"
          iconSize={40}
          style={styles.trashButton}
        />
        <AppText style={styles.dayTitle}>{day}</AppText>
      </View>
      <ScrollView
        style={styles.momentContainer}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <MomentElement moment="Matin" />
        <MomentElement moment="Midi" />
        <MomentElement moment="Soir" />

        {/* <MomentElement moment="Matin" />
        <MomentElement moment="Midi" />
        <MomentElement moment="Soir" />
        <MomentElement moment="Matin" />
        <MomentElement moment="Midi" />
        <MomentElement moment="Soir" />
        <MomentElement moment="Matin" />
        <MomentElement moment="Midi" />
        <MomentElement moment="Soir" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  dayTitle: {
    fontSize: 36,
    fontWeight: theme.properties.bold,
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 60,
  },
  trashButton: {
    position: "absolute",
    left: 24,
    padding: 4,
  },
  momentContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
