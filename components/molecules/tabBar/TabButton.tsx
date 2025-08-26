import { Pressable, Text, StyleSheet } from "react-native";
import theme from "@themes/index";
import { Link } from "expo-router";
import { usePathname } from "expo-router";
import Icon from "@components/atoms/Icon";

interface TabButtonProps {
  routeName: "menu" | "cart" | "stock" | "infos";
  label: string;
}

const TabButton = ({ routeName, label }: TabButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/${routeName}`;
  return (
    <Link href={`/${routeName}`} asChild>
      <Pressable>
        <Text style={{ color: isActive ? "red" : "black" }}>{label}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    // padding: 12,
    backgroundColor: "#6200ee",
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default TabButton;
