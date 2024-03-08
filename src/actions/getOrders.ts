import { errorHandlingWrapper } from "@/lib/utils";
import { prisma } from "../../prisma/client";
import { z } from "zod";
import { redirect } from "next/navigation";

const TAKE = 10;

const orderParamsSchema = z.object({
  page: z
    .string()
    .default("1")
    .refine((val) => +val >= 0 && !isNaN(Number(val)))
    .transform((val) => parseInt(val)), // transform it at the end
  sort: z
    .string()
    .default("date.desc")
    .refine(
      (value) => {
        const [field, direction] = value.split(".");
        return (
          (direction === "asc" || direction === "desc") && field.length > 0
        );
      },
      {
        message: "Sort field must be in the format `${string}.${1 | -1}`",
      }
    ),
});

const getOrders = errorHandlingWrapper(
  async (args: any) => {
    const result = orderParamsSchema.safeParse(args);
    if (!result.success) {
      console.log(result.error);
      redirect("/orders");
    }

    const { page, sort: sortQuery } = result.data;
    const [sortField, sortDirection] = sortQuery.split(".");

    const [orders, count] = await prisma.$transaction([
      prisma.orders.findMany({
        skip: (page - 1) * TAKE,
        take: TAKE,
        orderBy: {
          [sortField]: sortDirection,
        },
      }),
      prisma.orders.count({}),
    ]);
    return { orders, numberOfOrders: count } as const;
  },
  {
    type: "db",
    fallbackMessage:
      "Failed to Fetch Orders (Error Code: 400)\nPlease ensure you have a stable connection",
  }
);

export default getOrders;
