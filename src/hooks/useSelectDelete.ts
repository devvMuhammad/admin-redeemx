import { useState } from "react";

export function useSelectDelete() {
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);
  const checkedNum: number = checkedBoxes.reduce((acc, elm) => {
    if (elm) acc++;
    return acc;
  }, 0);
  const addItem = (id: string) =>
    setCheckedBoxes((prev) => {
      const copy = [...prev];
      copy.push(id);

      return copy;
    });
  const removeItem = (id: string) =>
    setCheckedBoxes((prev) => {
      let copy = [...prev];
      copy = copy.filter((elm) => elm !== id);
      return copy;
    });
  const selectAll = (allIds: string[]) => setCheckedBoxes(allIds);
  const unselectAll = () => setCheckedBoxes([]);
  return {
    checkedBoxes,
    checkedNum,
    addItem,
    removeItem,
    selectAll,
    unselectAll,
  };
}
