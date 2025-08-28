import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { globalStyles, topBarStyles } from "@themes/styles";
import Icon from "@components/atoms/global/Icon";
import { usePathname } from "expo-router";

interface TopButtonProps {
  routeName: string;
  icon: string;
  iconColor?: string;
  green?: boolean;
}

const TopButton = ({ routeName, icon, iconColor, green }: TopButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/${routeName}`;

  const mergedButtonStyle = StyleSheet.flatten([
      globalStyles.buttonBase,
      styles.button,
      green && topBarStyles.greenButton
    ]);
  return (
    <Link href={{ pathname: `/${routeName}` } as any} asChild>
      <Pressable style={mergedButtonStyle}>
        <Icon name={icon} color={iconColor} size={32} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#da4545ff",
  },
});

export default TopButton;
