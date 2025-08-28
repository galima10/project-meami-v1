import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { globalStyles, topBarStyles } from "@themes/styles";
import Icon from "@components/atoms/global/Icon";
import { usePathname } from "expo-router";
import theme from "@themes/index";

interface TopButtonProps {
  routeName: string;
  icon: string;
  green?: boolean;
  withStroke?: boolean;
}

const TopButton = ({ routeName, icon, green, withStroke }: TopButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/${routeName}`;

  const greenStyles = StyleSheet.flatten([
    topBarStyles.greenButton,
    globalStyles.littleShadow,
  ]);

  const activeStyles = StyleSheet.flatten([
    !green ? topBarStyles.active : topBarStyles.greenActive,
    globalStyles.littleShadow,
  ]);

  const mergedButtonStyle = StyleSheet.flatten([
      globalStyles.buttonBase,
      styles.button,
      green && greenStyles,
      isActive && activeStyles,
    ]);
  return (
    <Link href={{ pathname: `/${routeName}` } as any} asChild>
      <Pressable style={mergedButtonStyle}>
        <Icon name={icon} color={theme.properties.beige} size={32} withStroke={withStroke} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    opacity: 0.5,
  },
});

export default TopButton;
