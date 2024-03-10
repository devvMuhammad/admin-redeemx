"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/client";
import { errorHandlingWrapper, protectAction } from "@/lib/utils";

export const deleteProduct = errorHandlingWrapper(
  protectAction(async (ids: string[]) => {
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
  }),
  {
    type: "db",
    fallbackMessage:
      "Failed to delete product \n Make sure to have a stable connection",
  }
);
