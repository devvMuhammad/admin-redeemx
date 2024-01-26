import ProductControls from "@/components/inventory/ProductControls";
import ProductsTable from "@/components/inventory/ProductsTable";

export default function Inventory() {
  return (
    <section className="space-y-4">
      <ProductControls />
      <ProductsTable />
    </section>
  );
}
