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
  price: z.number().min(1, { message: "Price is required" }),
  stock: z.number().min(1, { message: "Initial stock is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function NewProductForm() {
  const { handleSubmit } = useForm<FormSchema>({
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
      <div className="grid items-center grid-cols-[auto_1fr] gap-4">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
        <p className="text-red-500"></p>
        <Label htmlFor="category">Category</Label>
        <CategorySelect />

        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" className="w-1/2" />

        <Label htmlFor="stock">Set Stock</Label>
        <Input id="stock" type="number" className="w-1/2" />
      </div>
      <Button className="self-end font-bold">Add Product</Button>
    </form>
  );
}
