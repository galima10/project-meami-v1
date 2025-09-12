import { View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import AddPanelHeader from "../AddPanelHeader";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";

interface AddPanelProps<T> {
  setIsDarkScreenVisible: (visible: boolean) => void;
  data: T[];
  renderItem: (item: T) => React.ReactElement | null;
}

export default function AddPanel<T>({
  setIsDarkScreenVisible,
  data,
  renderItem,
}: AddPanelProps<T>) {
  const [inputMode, setInputMode] = useState<"search" | "sorter">("search");
  return (
    <View style={[styles.container, globalStyles.bigShadow]}>
      <AddPanelHeader
        setIsDarkScreenVisible={setIsDarkScreenVisible}
        setInputMode={setInputMode}
        inputMode={inputMode}
      />
      <FlashList
        data={data}
        keyExtractor={(item: any, index) => item.id || index.toString()}
        renderItem={({ item }) => renderItem(item)}
        estimatedItemSize={80}
        contentContainerStyle={{
          padding: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    backgroundColor: theme.properties.beige,
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    borderRadius: 16,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    // backgroundColor: theme.properties.white,
  },
});
