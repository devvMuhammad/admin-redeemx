"use client";
import ProductsHeader from "./ProductsHeader";
import ProductRow from "./ProductRow";
import { useSelectDelete } from "@/hooks/useSelectDelete";
import Pagination from "./Pagination";
import { products } from "@prisma/client";
import DeleteProduct from "./delete/DeleteProduct";

export default function ProductsTable({ products }: { products: products[] }) {
  const {
    checkedBoxes,
    checkedNum,
    addItem,
    removeItem,
    selectAll,
    unselectAll,
  } = useSelectDelete();
  const allIds = products.reduce((acc: string[], elm) => {
    acc.push(elm.id);
    return acc;
  }, []);
  console.log(checkedBoxes);
  return (
    <div className="overflow-x-auto space-y-2">
      <div className="min-w-[700px] border border-gray-600 pb-4 rounded-xl header product-rows grid gap-y-4 gap-x-2 md:gap-x-0 grid-cols-[auto_auto_3fr_1fr_1fr_1fr_1fr_1fr_0.5fr] justify-center items-center text-center overflow-x-auto ">
        <ProductsHeader />
        {products.map((product, i) => (
          <ProductRow
            product={product}
            index={i}
            key={product.id}
            checked={checkedBoxes[i] === product.id}
            addItemToDelete={addItem}
            removeItemToDelete={removeItem}
          />
        ))}
      </div>
      <Pagination />
      <DeleteProduct
        allIds={allIds}
        checkedNum={checkedNum}
        selectAll={selectAll}
        unselectAll={unselectAll}
      />
    </div>
  );
}
