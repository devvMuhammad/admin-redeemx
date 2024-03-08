import Badge from "@/components/ui/Badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoreHorizontalIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";
import { orders as orderPrismaType } from "@prisma/client";

export default function OrdersTable({ orders }: { orders: orderPrismaType[] }) {
  const orderStatusColor = {
    Shipped: "bg-green-600",
    Paid: "bg-blue-600",
    Unfulfilled: "bg-red-600",
  };
  return (
    <section className="border border-zinc-600 shadow-sm rounded-lg px-4">
      <div className="px-2 py-4 rounded-xl header order-rows grid grid-cols-[auto_1fr_1fr_auto_1.5fr_1fr_auto] gap-y-4 gap-x-2 justify-center items-center text-center overflow-x-auto">
        {/* TABLE HEADER */}
        <span className="font-bold">ID</span>
        <span className="font-bold">Customer</span>
        <span className="font-bold">Date</span>
        <span className="font-bold">Amount</span>
        <span className="font-bold">Address</span>
        <span className="font-bold">Status</span>
        <span className="font-bold">&nbsp;</span>
        {/* TABLE ROWS */}
        {orders.map((order) => (
          <>
            <p className="font-medium">{order.id}</p>
            <p className="pl-4 text-center">{order.name}</p>
            <p className="text-left">{formatDate(order.date)}</p>
            <p>${+order.amount}</p>
            <p className="pl-4 text-left">{order.address}</p>
            {/* <p>{order.status}</p> */}
            <div>
              <Badge
                className={`border-none text-white ${
                  orderStatusColor[
                    order.status as "Shipped" | "Paid" | "Unfulfilled"
                  ]
                }`}
              >
                {order.status}
              </Badge>
            </div>
            <div className="mx-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <MoreHorizontalIcon className="cursor-pointer p-1 border rounded-md border-white hover:translate-y-[-2px]" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
