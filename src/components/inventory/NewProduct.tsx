import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import NewProductForm from "./NewProductForm";

export default function NewProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="font-bold text-lg p-4">
          New Item
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white">
        <DialogHeader className="text-xl">
          <DialogTitle>Fill The Information</DialogTitle>
        </DialogHeader>
        <NewProductForm />
      </DialogContent>
    </Dialog>
  );
}