"use server";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma/client";
import { z } from "zod";

type Props = {
  name: string;
  search: string;
  category: string;
  price: string;
  page: number;
};

// for now making some optional, will come on the rest later
const PropsSchema = z.object({
  name: z.string().min(1).optional(),
  category: z.string().optional(),
  search: z.string().min(1).optional(),
  page: z.number().refine((val) => val >= 0 && val <= 5),
  price: z.number().nonnegative().optional(),
});

// this is the number of products per page
const TAKE: number = 5;

export async function getProducts(args?: Partial<Props>) {
  // const {page} = args as Props;

  const page = Number(args?.page) || 1;
  const category = args?.category || "All"; // if no category, then make it to "All"

  //* no need to parse the category with zod
  const parseResult = PropsSchema.safeParse({ page });
  // console.log(`PARSE RESULT ON THE SERVER ${page} ${parseResult.success}`);
  if (!parseResult.success) redirect("/inventory");

  const [products, count] = await prisma.$transaction([
    prisma.products.findMany({
      where: category === "All" ? {} : { category: args?.category },
      orderBy: {
        name: "asc",
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
}
