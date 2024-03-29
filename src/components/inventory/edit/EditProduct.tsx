"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit2Icon } from "lucide-react";
import EditProductForm from "./EditProductForm";
import { useState } from "react";

export type EditProductProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export default function EditProduct({
  id,
  name,
  category,
  price,
  stock,
}: EditProductProps) {
  const [open, setOpen] = useState(false);
  return (
    <TooltipProvider delayDuration={0}>
      <Dialog open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Edit2Icon className="cursor-pointer p-1 border rounded-md border-black dark:border-white hover:translate-y-[-2px]" />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
        <DialogContent className="bg-black text-white">
          <DialogHeader className="text-xl mb-4">
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Edit the Product the way you want to edit the product
            </DialogDescription>
          </DialogHeader>
          <EditProductForm
            id={id}
            name={name}
            category={category}
            price={price}
            stock={0}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
