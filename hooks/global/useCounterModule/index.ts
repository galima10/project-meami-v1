import { useState } from "react";

export function useCounterModule(initialQuantity: number) {
  const [number, onChangeNumber] = useState(initialQuantity.toString());
  const handleAdd = () => {
    const newValue = (parseInt(number) + 1).toString();
    onChangeNumber(newValue);
  };
  const handleRemove = () => {
    if (parseInt(number) === 0) return;
    const newValue = (parseInt(number) - 1).toString();
    onChangeNumber(newValue);
  };
  return { number, onChangeNumber, handleAdd, handleRemove };
}
