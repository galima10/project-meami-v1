import { View, StyleSheet, ScrollView } from "react-native";
import MenuElementList from "@components/molecules/menu/list/MenuElementList";
import { days } from "@utils/getDate";
import { useMenu } from "@contexts/MenuContext";

export default function MenuList() {
  const { menu } = useMenu();
  return (
    <ScrollView
      style={styles.menuList}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      {days.map((day) => (
        <MenuElementList key={day} day={day} menu={menu[day]} />
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
