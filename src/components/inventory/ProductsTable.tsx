"use client";
import TableHeader from "./TableHeader";
import ProductRow from "./ProductRow";
import { dummyProducts } from "./DummyProducts";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ProductsTable() {
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
  // const removeItem = () => setSelected((prev) => prev - 1);
  return (
    <div className="overflow-x-auto space-y-2">
      {checkedBoxes?.length > 0 && (
        <div className="flex gap-4">
          <div>
            <span className="font-bold text-xl">{checkedNum}</span> Products
            Selected
          </div>
          <Button variant="destructive">Delete At Once</Button>
          <Button
            onClick={() => setCheckedBoxes(Array.from(Array(10), () => 1))}
          >
            Select All
          </Button>
          <Button
            onClick={() => setCheckedBoxes(Array.from(Array(10), () => 0))}
          >
            Unselect
          </Button>
        </div>
      )}
      <div className="min-w-[700px] header product-rows grid gap-y-4 grid-cols-[auto_3fr_1fr_1fr_1fr_1fr_1fr_0.5fr] justify-center items-center text-center overflow-x-auto ">
        <TableHeader />
        {dummyProducts.map((product, i) => (
          <ProductRow
            product={product}
            index={i}
            key={product.id}
            checked={checkedBoxes[i] === 1}
            addItemToDelete={addItem}
            removeItemToDelete={removeItem}
          />
        ))}
      </div>
    </div>
  );
}
