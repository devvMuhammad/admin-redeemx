import getOrders from "@/actions/getOrders";
import Pagination from "@/components/inventory/Pagination";
import OrdersControl from "@/components/orders/OrdersControl";
import OrdersTable from "@/components/orders/OrdersTable";
export default async function Orders({
  searchParams: { page, sort },
}: {
  searchParams: { page?: string; sort?: string };
}) {
  const { orders, numberOfOrders } = await getOrders({ page, sort });
  console.log(orders);
  return (
    <section className="space-y-4">
      <OrdersControl />
      <OrdersTable orders={orders} />
      {/* WILL ADD THIS LATER TO THE ORDERS TABLE */}
      <Pagination
        currentItems={orders.length}
        numberOfItems={numberOfOrders}
        perPage={10}
      />
    </section>
  );
}
