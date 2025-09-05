import { View, StyleSheet, ScrollView } from "react-native";
import MenuElementList from "@components/molecules/menu/list/MenuElementList";
import { days } from "@utils/getDate";
import { mockedMenu } from "@constants/mockedMenu";

export default function MenuList() {
  const mockedMenuEmpty: Record<
    string,
    { matin: string[]; midi: string[]; soir: string[] }
  > = {
    lundi: {
      matin: [],
      midi: [],
      soir: [],
    },
    mardi: {
      matin: [],
      midi: [],
      soir: [],
    },
    mercredi: {
      matin: [],
      midi: [],
      soir: [],
    },
    jeudi: {
      matin: [],
      midi: [],
      soir: [],
    },
    vendredi: {
      matin: [],
      midi: [],
      soir: [],
    },
    samedi: {
      matin: [],
      midi: [],
      soir: [],
    },
    dimanche: {
      matin: [],
      midi: [],
      soir: [],
    },
  };
  return (
    <ScrollView
      style={styles.menuList}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      {days.map((day) => (
        <MenuElementList key={day} day={day} menu={mockedMenuEmpty[day]} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuList: {
    flex: 1,
    padding: 16,
  },
});
