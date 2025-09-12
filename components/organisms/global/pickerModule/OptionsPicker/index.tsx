import { AppText } from "@components/atoms/global/Texts";
import { useAppearDisappear } from "@hooks/animations/global/useAppearDisappear";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

interface OptionsPickerProps {
  visible: boolean;
  setValue: (value: string) => void;
  setOpenPicker: (open: boolean) => void;
  selectedValue: string | null;
  items: { label: string }[];
}

export default function OptionsPicker({
  visible,
  setValue,
  setOpenPicker,
  selectedValue,
  items,
}: OptionsPickerProps) {
  const { mounted, animatedStyle } = useAppearDisappear(visible);

  if (!mounted) return null;

  return (
    <Animated.View
      style={[styles.container, globalStyles.bigShadow, animatedStyle]}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <>
            <Pressable
              onPress={() => {
                setValue(item.label);
                setOpenPicker(false);
              }}
              style={({ pressed }) => [
                styles.option,
                pressed && { opacity: 0.75 },
              ]}
            >
              <AppText
                style={[
                  styles.label,
                  selectedValue === item.label && {
                    fontWeight: theme.properties.semibold,
                    opacity: 1,
                  },
                ]}
              >
                {item.label}
              </AppText>
            </Pressable>
            <View style={styles.divider} />
          </>
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 0,
    zIndex: 10,
    backgroundColor: theme.properties.white,
    borderColor: theme.properties.whiteBorder,
    borderWidth: 1.5,
    borderRadius: 16,
    width: "100%",
    overflow: "hidden",
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    opacity: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: theme.properties.brown,
    opacity: 0.25,
    marginHorizontal: 16,
  },
});
