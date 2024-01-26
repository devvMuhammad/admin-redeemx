import { Inter } from "next/font/google";
import { Product } from "./ProductsTable";
import Badge from "../ui/Badge";
import { MoreHorizontalIcon } from "lucide-react";

const inter = Inter({ weight: "400", style: "normal" });

export default function ProductRow({
  product,
  num,
}: {
  product: Product;
  num: number;
}) {
  return (
    <>
      <p className={`${inter.className}`}>{num}</p>
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
      {/* <p className={`${inter.className}`}>PPP</p> */}
      <div className="mx-auto">
        <MoreHorizontalIcon className="cursor-pointer p-1 border rounded-md border-white hover:translate-y-[-2px]" />
      </div>
    </>
  );
}
