"use server";
import { PrismaClient, products as Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addProduct({
  name,
  category,
  price,
}: {
  name: string;
  category: string;
  price: number;
}) {
  try {
    const response = await prisma.products.create({
      data: {
        name,
        category,
        price,
        imageurl: "dummy-url",
        revenue: 0,
        status: "Active",
      },
    });
    console.log(response);
    revalidatePath("/inventory");
    return { success: true, message: "Product created successfully!" };
  } catch (err) {
    return { success: false, message: err };
  }
  // if(response.)
}
