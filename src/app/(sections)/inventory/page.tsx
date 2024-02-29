import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";
import Heading from "@/components/ui/Heading";

import { getProducts } from "@/lib/getProducts";
import { Suspense } from "react";

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
      <Suspense fallback={<h1>Loading products...</h1>}>
        {numberOfProducts > 0 ? (
          <ProductsTable
            products={products}
            numberOfProducts={numberOfProducts}
          />
        ) : (
          <div className="text-center">
            <Heading>No such products!</Heading>
            <p>No products for such filters. Kindly change your filters</p>
          </div>
        )}
      </Suspense>
    </section>
  );
}
