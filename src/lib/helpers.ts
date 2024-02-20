"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/client";

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
    const response = await prisma.products.update({
      where: {
        id,
      },
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
    return { success: true, message: "Product edited successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, message: err };
  }
}

export async function deleteProduct({ ids }: { ids: string[] }) {
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
    console.error(err);
    return { success: false, message: err };
  }
}
