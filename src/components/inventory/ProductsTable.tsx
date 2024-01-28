"use client";
import TableHeader from "./TableHeader";
import ProductRow from "./ProductRow";
import { dummyProducts } from "./DummyProducts";
import { Button } from "../ui/button";
import { useSelectDelete } from "@/hooks/useSelectDelete";

export default function ProductsTable() {
  const {
    checkedBoxes,
    checkedNum,
    addItem,
    removeItem,
    selectAll,
    unselectAll,
  } = useSelectDelete();
  return (
    <div className="overflow-x-auto space-y-2">
      {checkedNum > 0 && (
        <div className="flex gap-4">
          <div>
            <span className="font-bold text-xl">{checkedNum}</span> Products
            Selected
          </div>
          <Button variant="destructive">Delete At Once</Button>
          <Button onClick={selectAll}>Select All</Button>
          <Button onClick={unselectAll}>Unselect</Button>
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
