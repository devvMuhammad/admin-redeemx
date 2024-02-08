import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import NewProductForm from "./NewProductForm";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "600"], style: "normal" });

export default function NewProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${inter.className} font-bold p-4`}>New Item</Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white">
        <DialogHeader className="text-xl mb-4">
          <DialogTitle>New Product</DialogTitle>
          <DialogDescription>
            Enter details of the product you want to add
          </DialogDescription>
        </DialogHeader>
        <NewProductForm />
      </DialogContent>
    </Dialog>
  );
}
