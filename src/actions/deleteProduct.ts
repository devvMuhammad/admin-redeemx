"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/client";

export async function deleteProduct(ids: string[]) {
  try {
    const response = await prisma.products.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    console.log(response);
    revalidatePath("/inventory");
    return { success: true, message: "Product deleted successfully!" };
  } catch (err) {
    const error = err as { code: string };
    console.error(error.code);
    let message;
    if (error.code === "P2003")
      message = "Cannot delete products when orders are attached with it";
    else message = "Make sure you to have a stable connection";
    return { success: false, message: message };
  }
}
