import { Inter } from "next/font/google";
import Badge from "../ui/Badge";
import { Checkbox } from "../ui/checkbox";
import { memo } from "react";
import { products } from "@prisma/client";
import EditProduct from "./edit/EditProduct";
import { CldImage } from "next-cloudinary";

const inter = Inter({ weight: "400", style: "normal" });

const RemainingProductRows = memo(function RemainingProductRows({
  product,
}: {
  product: products;
}) {
  return (
    <>
      {" "}
      {/* <div className="h-12 w-12 bg-gray-500 rounded-md mx-2"></div> */}
      <div className="h-[100px] w-[100px] flex justify-center items-center">
        {product?.imageurl === "dummy-url" || !product.imageurl ? (
          <div className="h-12 w-12 bg-gray-500 rounded-md mx-2"></div>
        ) : (
          // <Cloudina
          <CldImage
            width={75}
            height={200}
            src={product.imageurl as string}
            alt="Macbook image"
            // sizes=""
            className="rounded-md"
          />
        )}
      </div>
      <p className={`${inter.className} flex gap-3`}>{product.name}</p>
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
        <EditProduct
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          stock={0}
        />
      </div>
    </>
  );
});
type ProductRowProps = {
  product: products;
  index: number;
  addItemToDelete: (id: string) => void;
  removeItemToDelete: (id: string) => void;
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
            checked
              ? addItemToDelete(product.id)
              : removeItemToDelete(product.id)
          }
        />
      </div>

      <RemainingProductRows product={product} />
    </>
  );
}
