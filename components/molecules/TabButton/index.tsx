import { Pressable, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import { globalStyles, tabBarStyles } from "@themes/styles";
import { Link } from "expo-router";
import Icon from "@components/atoms/global/Icon";
import { useTabButton } from "@hooks/navigationBars/useTabButton";

interface TabButtonProps {
  routeName:
    | "menuViews/calendar"
    | "cartViews/list"
    | "stockViews"
    | "infosViews";
  icon: string;
  label: string;
}

export default function TabButton({ routeName, icon, label }: TabButtonProps) {
  const { isActive } = useTabButton(routeName);

  // Styles fusionnés (car le <Link> wrapper ne permet pas les tableaux de styles)
  const mergedButtonStyle = StyleSheet.flatten([
    globalStyles.buttonBase,
    styles.button,
    isActive && tabBarStyles.active,
    isActive && globalStyles.littleShadow,
  ]);
  const mergedTextStyle = StyleSheet.flatten([
    styles.buttonText,
    isActive && styles.buttonActive,
  ]);

  return (
    <Link href={{ pathname: `/${routeName}` } as any} asChild>
      <Pressable style={mergedButtonStyle}>
        <Icon
          name={icon}
          size={34}
          color={
            isActive ? theme.properties.vibrantOrange : theme.properties.brown
          }
        />
        <AppText style={mergedTextStyle}>{label}</AppText>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 6,
    opacity: 0.5,
    backgroundColor: theme.properties.beige,
  },
  buttonText: {
    fontWeight: theme.properties.semibold,
    flexShrink: 1,
    fontSize: 16,
  },
  buttonActive: {
    color: theme.properties.vibrantOrange,
  },
});
