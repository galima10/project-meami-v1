import { Pressable, StyleSheet } from "react-native";
import { Link, usePathname, useRouter } from "expo-router";
import { globalStyles, topBarStyles } from "@themes/styles";
import Icon from "@components/atoms/global/Icon";
import theme from "@themes/index";

interface TopButtonProps {
  routeName?: string;
  icon: string;
  green?: boolean;
  withStroke?: boolean;
  params?: Record<string, any>;
  goBack?: boolean;
}

export default function TopButton({
  routeName,
  icon,
  green,
  withStroke,
  params,
  goBack,
}: TopButtonProps) {
  const router = useRouter();
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

  const content = (
    <Pressable
      style={mergedButtonStyle}
      onPress={goBack ? () => router.back() : undefined}
    >
      <Icon
        name={icon}
        color={theme.properties.beige}
        size={32}
        withStroke={withStroke}
      />
    </Pressable>
  );

  if (goBack) return content;

  return (
    <Link href={{ pathname: `/${routeName}`, params } as any} asChild>
      {content}
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    opacity: 0.5,
  },
});
