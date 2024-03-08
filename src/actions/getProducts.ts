"use server";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma/client";
import { z } from "zod";
import { errorHandlingWrapper } from "../lib/utils";

type Props = {
  category: string;
  price: string;
  page: number;
  sort: `${string}.${1 | -1}`;
};

// for now making some optional, will come on the rest later
const PropsSchema = z.object({
  category: z.string().default("All"),
  page: z
    .string()
    .default("1")
    .refine((val) => +val >= 0 && +val <= 5 && !isNaN(Number(val)))
    .transform((val) => parseInt(val)), // transform it at the end
  sort: z
    .string()
    .default("name.asc")
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

// this is the number of products per page
const TAKE: number = 5;

export const getProducts = errorHandlingWrapper(
  async (args: any) => {
    //* no need to parse the category with zod
    const parseResult = PropsSchema.safeParse(args);
    // if data is of invalid shape, then redirect back
    if (!parseResult.success) {
      console.log(parseResult.error);
      redirect("/inventory");
    }
    // const {page} = args as Props;
    const parsed = parseResult.data;

    const page = parsed.page;
    const category = parsed.category; // if no category, then make it to "All"
    const [sortField, sortDirection] = parsed.sort.split(".");
    console.log(parsed);
    const [products, count] = await prisma.$transaction([
      prisma.products.findMany({
        where: category === "All" ? {} : { category: args?.category },
        orderBy: {
          // name:"desc",
          // name: "asc",
          [sortField]: sortDirection,
        },
        skip: (page - 1) * TAKE,
        take: TAKE,
      }),
      prisma.products.count({
        where: category === "All" ? {} : { category: args?.category },
      }),
    ]);
    // const products = await ;
    return { products, numberOfProducts: count };
  },
  {
    type: "db",
    fallbackMessage:
      "Failed to Fetch Products (Error Code: 400)\nPlease ensure you have a stable connection",
  }
);
