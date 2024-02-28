import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";

import { getProducts } from "@/lib/getProducts";

type searchParams = {
  name: string;
  search: string;
  category: string;
  price: string;
  page: number;
};

export default async function Inventory({
  searchParams: { name, search, category, price, page },
}: {
  searchParams: searchParams;
}) {
  const { products, numberOfProducts } = await getProducts({
    category,
    page,
  });
  console.log({ products, numberOfProducts });
  return (
    <section className="space-y-4">
      <ProductControls />
      <ProductsTable products={products} numberOfProducts={numberOfProducts} />
    </section>
  );
}
