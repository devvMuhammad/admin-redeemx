import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";
import { prisma } from "../../../../prisma/client";

export default async function Inventory() {
  const products = await prisma.products.findMany({
    orderBy: {
      name: "asc",
    },
  });
  console.log(products);
  return (
    <section className="space-y-4">
      <ProductControls />
      <ProductsTable products={products} />
    </section>
  );
}
