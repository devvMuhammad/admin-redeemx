"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/client";
import { nanoid } from "nanoid";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(fileBase64: string, category: string) {
  // console.log("this is inside the server action");
  //! make sure to add the image validation one day on the server as well
  const imageId = nanoid(20);
  const response = await cloudinary.uploader.upload(fileBase64, {
    public_id: `admin-redeemx/${category}/${imageId}`,
  });
  // console.log(response);
  return response;
}

//! image here is the image in base64 format
export async function addProduct({
  name,
  category,
  price,
  image,
}: {
  name: string;
  category: string;
  price: number;
  image: string;
}) {
  try {
    const { public_id } = await uploadImage(image, category);
    const response = await prisma.products.create({
      data: {
        name,
        category,
        price,
        imageurl: public_id,
        // imageurl: "dummy",
        revenue: 0,
        status: "Active",
      },
    });
    console.log(response);
    revalidatePath("/inventory");
    return { success: true, message: "Product created successfully!" };
  } catch (err) {
    console.log(err);
    return { success: false, message: (err as Error).message };
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
