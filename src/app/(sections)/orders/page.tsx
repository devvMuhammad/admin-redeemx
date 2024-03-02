import Pagination from "@/components/inventory/Pagination";
import Badge from "@/components/ui/Badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoreHorizontalIcon } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  style: "normal",
});

interface Order {
  orderId: string;
  name: string;
  date: string;
  totalAmount: string;
  status: "Shipped" | "Paid" | "Unfulfilled";
  address: string;
  orderItems?: string[];
}

const ordersData: Order[] = [
  {
    orderId: "#3210",
    name: "Olivia Martin",
    date: "February 20, 2024, 10:30 AM",
    totalAmount: "$42.25",
    status: "Shipped",
    address: "123 Main St, Cityville",
    orderItems: ["Product A", "Product B", "Product C"],
  },
  {
    orderId: "#3209",
    name: "Ava Johnson",
    date: "January 5, 2024, 02:45 PM",
    totalAmount: "$74.99",
    status: "Paid",
    address: "456 Oak Ave, Townsville",
    orderItems: ["Product X", "Product Y"],
  },
  {
    orderId: "#3204",
    name: "Michael Johnson",
    date: "August 3, 2023 08:15 AM",
    totalAmount: "$64.75",
    status: "Unfulfilled",
    address: "789 Pine Blvd, Villagetown",
    orderItems: ["Product M", "Product N", "Product O"],
  },
  {
    orderId: "#3203",
    name: "Lisa Anderson",
    date: "July 15, 2023 11:00 AM",
    totalAmount: "$34.50",
    status: "Shipped",
    address: "101 Cedar Lane, Hamlet City",
    orderItems: ["Product P", "Product Q"],
  },
  {
    orderId: "#3202",
    name: "Samantha Green",
    date: "June 5, 2023 03:30 PM",
    totalAmount: "$89.99",
    status: "Paid",
    address: "202 Maple Street, Woodsville",
    orderItems: ["Product Z"],
  },
  {
    orderId: "#3201",
    name: "Adam Barlow",
    date: "May 20, 2023 09:45 AM",
    totalAmount: "$24.99",
    status: "Unfulfilled",
    address: "303 Birch Road, Timberland",
    orderItems: ["Product D", "Product E"],
  },
  {
    orderId: "#3207",
    name: "Sophia Anderson",
    date: "November 2, 2022 01:20 PM",
    totalAmount: "$99.99",
    status: "Paid",
    address: "404 Oakwood Lane, Parkville",
    orderItems: ["Product F", "Product G"],
  },
  {
    orderId: "#3206",
    name: "Daniel Smith",
    date: "October 7, 2022 05:45 PM",
    totalAmount: "$67.50",
    status: "Shipped",
    address: "505 Pinecrest Avenue, Grove City",
    orderItems: ["Product H", "Product I", "Product J"],
  },
  {
    orderId: "#3207",
    name: "Sophia Anderson",
    date: "November 2, 2022 01:20 PM",
    totalAmount: "$99.99",
    status: "Paid",
    address: "404 Oakwood Lane, Parkville",
    orderItems: ["Product F", "Product G"],
  },
  {
    orderId: "#3206",
    name: "Daniel Smith",
    date: "October 7, 2022 05:45 PM",
    totalAmount: "$67.50",
    status: "Shipped",
    address: "505 Pinecrest Avenue, Grove City",
    orderItems: ["Product H", "Product I", "Product J"],
  },
  {
    orderId: "#3207",
    name: "Sophia Anderson",
    date: "November 2, 2022 01:20 PM",
    totalAmount: "$99.99",
    status: "Paid",
    address: "404 Oakwood Lane, Parkville",
    orderItems: ["Product F", "Product G"],
  },
  {
    orderId: "#3206",
    name: "Daniel Smith",
    date: "October 7, 2022 05:45 PM",
    totalAmount: "$67.50",
    status: "Shipped",
    address: "505 Pinecrest Avenue, Grove City",
    orderItems: ["Product H", "Product I", "Product J"],
  },
];

export default function Orders() {
  const orderStatusColor = {
    Shipped: "bg-green-600",
    Paid: "bg-blue-600",
    Unfulfilled: "bg-red-600",
  };
  return (
    <main className={`${inter.className}`}>
      <div className="border border-zinc-600 shadow-sm rounded-lg px-4">
        <div className="pb-4 rounded-xl header order-rows grid grid-cols-[auto_1fr_1.5fr_auto_1.5fr_1fr_auto] gap-y-4 gap-x-2 justify-center items-center text-center overflow-x-auto">
          {/* TABLE HEADER */}
          <span className="font-bold">ID</span>
          <span className="font-bold">Customer</span>
          <span className="font-bold">Date</span>
          <span className="font-bold">Amount</span>
          <span className="font-bold">Address</span>
          <span className="font-bold">Status</span>
          <span className="font-bold">&nbsp;</span>
          {/* TABLE ROWS */}
          {ordersData.map((order) => (
            <>
              <p className="font-medium">{order.orderId}</p>
              <p className="pl-4 text-center">{order.name}</p>
              <p className="text-left">{order.date}</p>
              <p>{order.totalAmount}</p>
              <p className="pl-4 text-left">{order.address}</p>
              {/* <p>{order.status}</p> */}
              <div>
                <Badge
                  className={`border-none text-white ${
                    orderStatusColor[order.status]
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
      </div>
      {/* WILL ADD THIS LATER TO THE ORDERS TABLE */}
      {/* <Pagination /> */}
    </main>
  );
}
