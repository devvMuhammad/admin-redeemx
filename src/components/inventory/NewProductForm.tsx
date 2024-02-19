"use client";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

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
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  function submitHandler({ name }: FormSchema) {
    console.log(name);
  }
  console.log(errors);
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
          {errors.stock && (
            <p className="text-sm text-red-500 mx-auto">
              {errors.stock.message}
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
      <Button type="submit" className="self-end font-bold">
        Add Product
      </Button>
    </form>
  );
}
