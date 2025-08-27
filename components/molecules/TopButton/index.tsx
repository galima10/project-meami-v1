import { Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "@themes/styles";

interface TopButtonProps {
  routeName: string;
  icon?: string;
}

const TopButton = ({ routeName, icon }: TopButtonProps) => {
    // const mergedButtonStyle = [globalStyles.button, globalStyles.buttonPrimary];
  return (
    <Link href={{ pathname: `/${routeName}` } as any} asChild>
      <Pressable>
        <Text>Go to {routeName}</Text>
      </Pressable>
    </Link>
  );
};

export default TopButton;
