"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/client";

export async function editProduct({
  id,
  name,
  category,
  price,
}: {
  id: string;
  name: string;
  category: string;
  price: number;
}) {
  try {
    await prisma.products.update({
      where: {
        id,
      },
      data: {
        name,
        category,
        price,
        // imageurl: "dummy-url",
        revenue: 0,
        status: "Active",
      },
    });
    // console.log(response);
    revalidatePath("/inventory");
    return { success: true, message: "Product edited successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, message: (err as Error).message };
  }
}
