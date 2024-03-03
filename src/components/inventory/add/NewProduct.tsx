"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import NewProductForm from "./NewProductForm";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ weight: ["400", "600"], style: "normal" });

export default function NewProduct() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`${inter.className} font-bold p-4`}>New Item</Button>
      </DialogTrigger>
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()} // dont close modal upon escs
        className="bg-black text-white"
      >
        <DialogHeader className="text-xl mb-4">
          <DialogTitle>New Product</DialogTitle>
          <DialogDescription>
            Enter details of the product you want to add
          </DialogDescription>
        </DialogHeader>
        <NewProductForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
