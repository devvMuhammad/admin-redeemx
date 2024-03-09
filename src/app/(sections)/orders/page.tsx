import getOrders, { TOrdersSchema } from "@/actions/getOrders";
import Pagination from "@/components/inventory/Pagination";
import OrdersControl from "@/components/orders/OrdersControl";
import OrdersTable from "@/components/orders/OrdersTable";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Orders({
  searchParams: { page, sort, amount, search },
}: {
  searchParams: { page: string; sort: string; amount: string; search: string };
}) {
  const { orders, numberOfOrders } = await getOrders({
    page,
    sort,
    amount,
    search,
  });
  console.log(orders);
  return (
    <section className="space-y-4">
      <OrdersControl />
      {numberOfOrders > 0 ? (
        <OrdersTable orders={orders} />
      ) : (
        <div className="text-center space-y-2">
          <Heading>No such orders!</Heading>
          <p>No orders for such filters. Kindly change your filters</p>
          <Link href="/orders" className="inline-block">
            <Button>Reset Filters</Button>
          </Link>
        </div>
      )}
      <Pagination
        currentItems={orders.length}
        numberOfItems={numberOfOrders}
        perPage={10}
      />{" "}
    </section>
  );
}
