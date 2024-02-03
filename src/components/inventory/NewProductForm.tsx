"use client";
import CategorySelect from "../ui/CategorySelect";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Product Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z
    .number()
    .positive("Price must be positive")
    .min(1, { message: "Price is required" }),
  stock: z.number().min(1, { message: "Initial stock is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function NewProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  function submitHandler(data: FormSchema) {
    // e.
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
          <Label className="text-sm text-right" htmlFor="name">
            Name
          </Label>
          <Input id="name" className="h-10" {...register("name")} />
        </div>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
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
        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
        <div className="grid items-center grid-cols-[1fr_3fr] gap-x-4">
          <Label className="text-sm text-right" htmlFor="category">
            Category
          </Label>
          <CategorySelect />
        </div>
      </div>
      <Button className="self-end font-bold">Add Product</Button>
    </form>
  );
}
