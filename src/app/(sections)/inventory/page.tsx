import { PrismaClient } from "@prisma/client";
import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";

const prisma = new PrismaClient();

export default async function Inventory() {
  const products = await prisma.products.findMany();
  return (
    <section className="space-y-4">
      <ProductControls />
      <ProductsTable products={products} />
    </section>
  );
}
