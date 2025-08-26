import { Pressable, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { Link } from "expo-router";
import { usePathname } from "expo-router";
import Icon from "@components/atoms/global/Icon";

interface TabButtonProps {
  routeName: "menu" | "cart" | "stock" | "infos";
  label: string;
}

const TabButton = ({ routeName, label }: TabButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/${routeName}`;
  return (
    <Link href={`/${routeName}`} asChild>
      <Pressable style={styles.button}>
        <Icon name={routeName} size={32} />
        <AppText style={styles.buttonText}>{label}</AppText>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.properties.vibrantYellow,
    marginHorizontal: 8,
    padding: 8,
  },
  buttonText: {
    fontWeight: theme.properties.bold,
    flexShrink: 1,
  },
});

export default TabButton;
