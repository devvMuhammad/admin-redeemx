import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";
import Heading from "@/components/ui/Heading";

import { getProducts } from "@/actions/getProducts";
import { Suspense } from "react";

type searchParams = {
  name: string;
  // search: string;
  category: string;
  page: number;
  sort: `${string}.${"asc" | "desc"}`;
};

export default async function Inventory({
  searchParams: { name, category, page, sort },
}: {
  searchParams: searchParams;
}) {
  const { products, numberOfProducts } = await getProducts({
    category,
    page,
    sort,
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
