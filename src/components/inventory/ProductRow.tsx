import { Inter } from "next/font/google";
import Badge from "../ui/Badge";
import { MoreHorizontalIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Product } from "./DummyProducts";
import { memo } from "react";

const inter = Inter({ weight: "400", style: "normal" });

const RemainingProductRows = memo(function RemainingProductRows({
  product,
}: {
  product: Product;
}) {
  return (
    <>
      {" "}
      <p className={`${inter.className}`}>{product.name}</p>
      <p className={`${inter.className}`}>{product.category}</p>
      <p className={`${inter.className}`}>{product.id}</p>
      <p className={`${inter.className}`}>${product.price.toFixed(2)}</p>
      <div className={`${inter.className}`}>
        <Badge
          className={`border-none text-white ${
            product.status === "Active" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {product.status}
        </Badge>
      </div>
      <p className={`${inter.className}`}>{product.revenue.toFixed(2)}</p>
      <div className="mx-auto">
        <MoreHorizontalIcon className="cursor-pointer p-1 border rounded-md border-white hover:translate-y-[-2px]" />
      </div>
    </>
  );
});
type ProductRowProps = {
  product: Product;
  index: number;
  addItemToDelete: (i: number) => void;
  removeItemToDelete: (i: number) => void;
  checked: boolean;
};

export default function ProductRow({
  product,
  index,
  checked,
  addItemToDelete,
  removeItemToDelete,
}: ProductRowProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <Checkbox
          className="border border-white"
          checked={checked}
          onCheckedChange={(checked) =>
            checked ? addItemToDelete(index) : removeItemToDelete(index)
          }
        />
      </div>
      <RemainingProductRows product={product} />
    </>
  );
}
