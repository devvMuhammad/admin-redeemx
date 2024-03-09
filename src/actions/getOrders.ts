import { errorHandlingWrapper } from "@/lib/utils";
import { prisma } from "../../prisma/client";
import { z } from "zod";
import { redirect } from "next/navigation";
import { cache } from "react";

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
  amount: z
    .string()
    .default("0-0")
    .refine((val) => {
      const [min, max] = val.split("-");
      return (
        val.includes("-") &&
        !isNaN(Number(min)) &&
        !isNaN(Number(max)) &&
        Number(min) >= 0 &&
        Number(max) >= 0 &&
        Number(min) <= Number(max)
      );
    }),
  search: z.string().default(""),
});

export type TOrdersSchema = z.infer<typeof orderParamsSchema>;

const getOrders = errorHandlingWrapper(
  cache(async (args: any) => {
    const result = orderParamsSchema.safeParse(args);

    if (!result.success) {
      console.log(result.error);
      redirect("/orders");
    }

    const {
      page,
      sort: sortQuery,
      amount: amountQuery,
      search: searchQuery,
    } = result.data;
    const [sortField, sortDirection] = sortQuery.split(".");
    const [min, max] = amountQuery.split("-");

    const [orders, count] = await prisma.$transaction([
      prisma.orders.findMany({
        where: {
          amount:
            amountQuery === "0-0"
              ? { gte: 0 }
              : {
                  gte: Number(min),
                  lte: Number(max),
                },
          name:
            searchQuery.length > 0
              ? { contains: searchQuery, mode: "insensitive" }
              : {},
        },
        skip: (page - 1) * TAKE,
        take: TAKE,
        orderBy: {
          [sortField]: sortDirection,
        },
      }),
      prisma.orders.count({
        where: {
          amount:
            amountQuery === "0-0"
              ? { gte: 0 }
              : {
                  gte: Number(min),
                  lte: Number(max),
                },
          name:
            searchQuery.length > 0
              ? { contains: searchQuery, mode: "insensitive" }
              : {},
        },
      }),
    ]);
    return { orders, numberOfOrders: count } as const;
  }),
  {
    type: "db",
    fallbackMessage:
      "Failed to Fetch Orders (Error Code: 400)\nPlease ensure you have a stable connection",
  }
);

export default getOrders;
