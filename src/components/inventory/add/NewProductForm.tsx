"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import { addProduct } from "@/lib/helpers";

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

const formSchema = z.object({
  name: z.string().min(1, { message: "Product Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z
    .number()
    .positive("Price must be positive")
    .min(1, { message: "Price is required" }),
  stock: z.number().min(1, { message: "Initial stock is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function NewProductForm() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    setValue,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // in order to get the custom error message as initially the image field is null
      image: "",
    },
  });

  function validateFile(image?: File | null):
    | {
        valid: false;
        message: string;
      }
    | { valid: true; name: string } {
    if (!image) return { valid: false, message: "Image upload is required" };

    if (image.size > 10 ** 8)
      return { valid: false, message: "Image size must not exceed 1MB" };

    const allowedTypes = ["jpeg", "jpg", "png"];

    console.log(image.name);

    if (!allowedTypes.some((elm) => image.name.endsWith(elm)))
      return { valid: false, message: "Invalid Image type" };

    return { valid: true, name: image.name };
  }

  async function getBase64URL() {
    return new Promise((resolve, reject) => {
      if (!fileRef.current?.files) {
        reject("File is missing");
        return;
      }
      const file = fileRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // uploadImageWithBuffer(reader.result as string, formData.category);
        resolve(reader.result);
      };
    });
  }

  async function submitHandler(formData: FormSchema) {
    // console.log(
    //   validateFile(fileRef.current?.files && fileRef.current?.files[0])
    // );
    // console.log(formData);
    setLoading(true);

    try {
      // console.log(response);
      // uploadImageWithBuffer(reader.result as string, formData.category);
      const { name, category, price, image } = formData;
      const response = await addProduct({ name, category, price, image });
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler, (error) => console.log(error))}
      className="flex flex-col gap-6"
    >
      <div className="space-y-2">
        <div className="flex flex-col gap-1">
          <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
            <Label className="text-sm text-right" htmlFor="name">
              Name
            </Label>
            <Input id="name" className="h-10" {...register("name")} />
          </div>
          {errors.name && (
            <p className="self-center text-sm text-red-500 mx-auto">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
            <Label className="text-sm text-right" htmlFor="price">
              Price
            </Label>
            <Input
              id="price"
              defaultValue={0}
              type="number"
              className="w-1/2 h-10"
              {...register("price", { valueAsNumber: true })}
            />
          </div>
          {errors.price && (
            <p className="text-sm text-red-500 mx-auto">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* !FILE INPUT WILL BE WRITTEN HERE */}
        <div className="flex flex-col gap-1">
          <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
            <Label className="text-sm text-right" htmlFor="stock">
              Set Stock
            </Label>
            <Input
              id="stock"
              type="number"
              defaultValue={0}
              className="w-1/2 h-10"
              {...register("stock", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
            <input
              onChange={async () => {
                // reset the file error message
                setError("image", {
                  type: "manual",
                  message: "",
                });
                if (fileRef.current?.files) {
                  // console.log(fileRef.current.files[0]);
                  const result = validateFile(fileRef.current.files[0]);
                  if (!result.valid) {
                    setError("image", {
                      type: "manual",
                      message: result.message,
                    });
                    return;
                  }
                  //! if file valid, then set the value of image as the base64url
                  const imagebase64URL = await getBase64URL();
                  setValue("image", imagebase64URL as string);
                  setFileName(fileRef.current?.files[0].name);
                } else console.log("No file exists  ");
              }}
              type="file"
              id="fileInput"
              name="file"
              hidden
              accept=".jpg, .jpeg, .png"
              ref={fileRef}
            />
            <Label className="text-sm text-right">Image</Label>
            <div className="grid grid-cols-[auto_1fr] gap-x-2 items-end">
              <Label
                htmlFor="fileInput"
                className="text-sm border border-white p-1 rounded-md text-center hover:bg-white hover:text-black tranistion-all duration-100 ease-in cursor-pointer"
              >
                Choose an Image
              </Label>
              {fileName && (
                <span className="text-sm overflow-x-hidden overflow-y-hidden text-nowrap overflow-ellipsis">
                  {fileName}
                </span>
              )}
            </div>
          </div>
          {errors.image && (
            <p className="text-sm text-red-500 mx-auto">
              {errors.image.message}
            </p>
          )}
        </div>
        <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
          <Label className="text-sm text-right" htmlFor="category">
            Category
          </Label>
          <Controller
            name="category"
            control={control}
            defaultValue="All"
            render={({ field: { value, onChange } }) => (
              <Select defaultValue="All" value={value} onValueChange={onChange}>
                <SelectTrigger className="border w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
      <Button disabled={loading} type="submit" className="self-end font-bold">
        {loading ? "Loading..." : "Add Product"}
      </Button>
    </form>
  );
}
