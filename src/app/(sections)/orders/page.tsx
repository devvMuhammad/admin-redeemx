import getOrders from "@/actions/getOrders";
import Pagination from "@/components/inventory/Pagination";
import OrdersControl from "@/components/orders/OrdersControl";
import OrdersTable from "@/components/orders/OrdersTable";
import Heading from "@/components/ui/Heading";

export default async function Orders({
  searchParams: { page, sort, amount },
}: {
  searchParams: { page: string; sort: string; amount: string };
}) {
  const { orders, numberOfOrders } = await getOrders({ page, sort, amount });
  console.log(orders);
  return (
    <section className="space-y-4">
      {numberOfOrders > 0 ? (
        <>
          {" "}
          <OrdersControl />
          <OrdersTable orders={orders} />
          <Pagination
            currentItems={orders.length}
            numberOfItems={numberOfOrders}
            perPage={10}
          />{" "}
        </>
      ) : (
        <div className="text-center">
          <Heading>No such orders!</Heading>
          <p>No orders for such filters. Kindly change your filters</p>
        </div>
      )}
    </section>
  );
}
