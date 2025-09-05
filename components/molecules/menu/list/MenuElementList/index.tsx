import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { FrenchDayOfWeek } from "@utils/getDate";
import { getDateInfo } from "@utils/getDate";
import MomentElement from "@components/atoms/menu/list/MomentElement";

interface MenuElementListProps {
  day: FrenchDayOfWeek;
  menu: {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  };
}

export default function MenuElementList({ day, menu }: MenuElementListProps) {
  const { dayOfWeek } = getDateInfo();
  const containerStyles = StyleSheet.flatten([
    globalStyles.bigShadow,
    styles.container,
    day === dayOfWeek && {
      borderColor: theme.properties.vibrantOrange,
      borderWidth: 2,
    },
  ]);
  return (
    <View style={containerStyles}>
      <AppText style={styles.title}>{day}</AppText>
      <MomentElement moment="Matin" menu={menu.matin} />
      <MomentElement moment="Midi" menu={menu.midi} />
      <MomentElement moment="Soir" menu={menu.soir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontWeight: theme.properties.semibold,
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 10,
  },
});
