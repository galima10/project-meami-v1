import { View, StyleSheet } from "react-native";
import CounterInput from "@components/molecules/global/CounterInput";
import AddRemoveButton from "@components/molecules/global/AddRemoveButton";
import { useState } from "react";
import { useCounterModule } from "@hooks/global/useCounterModule";

export default function CounterModule({ quantity }: { quantity: number }) {
  const { number, onChangeNumber, handleAdd, handleRemove } = useCounterModule(quantity);

  return (
    <View style={styles.container}>
      <AddRemoveButton type="remove" action={handleRemove} />
      <CounterInput value={number} onChangeNumber={onChangeNumber} />
      <AddRemoveButton type="add" action={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
