import { useState } from "react";

export function useSelectDelete() {
  const [checkedBoxes, setCheckedBoxes] = useState<number[]>(() =>
    Array.from(Array(5), () => 0)
  );
  const checkedNum: number = checkedBoxes.reduce((acc, elm) => {
    if (elm === 1) acc++;
    return acc;
  });
  const addItem = (i: number) =>
    setCheckedBoxes((prev) => {
      const copy = [...prev];
      copy[i] = 1;
      return copy;
    });
  const removeItem = (i: number) =>
    setCheckedBoxes((prev) => {
      const copy = [...prev];
      copy[i] = 0;
      return copy;
    });
  const selectAll = () => setCheckedBoxes(Array.from(Array(10), () => 1));
  const unselectAll = () => setCheckedBoxes(Array.from(Array(10), () => 0));
  return {
    checkedBoxes,
    checkedNum,
    addItem,
    removeItem,
    selectAll,
    unselectAll,
  };
}
