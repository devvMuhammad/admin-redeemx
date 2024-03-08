"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { deleteProduct } from "@/actions/deleteProduct";
import { MouseEvent, useState } from "react";

export default function DeleteProduct({
  allIds,
  checkedNum,
  selectAll,
  unselectAll,
  checkedBoxes,
}: {
  allIds: string[];
  checkedBoxes: string[];
  checkedNum: number;
  selectAll: (allIds: string[]) => void;
  unselectAll: () => void;
}) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onDelete(e: MouseEvent<HTMLButtonElement>) {
    setLoading(true);
    try {
      const response = await deleteProduct(checkedBoxes);
      if (!response.success) throw new Error(response.message as string);
      toast({
        title: "Action Successfull!",
        description: `Product${checkedBoxes.length > 1 ? "s" : ""}: ${
          checkedBoxes.length > 1
            ? checkedBoxes.map((id) => `#${id}`)
            : `#${checkedBoxes[0]} were deleted`
        }`,
      });
      console.log(response);
      unselectAll();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to delete product",
        description: (err as Error).message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    checkedNum > 0 && (
      <div className="flex gap-4">
        <div>
          <span className="font-bold text-xl">{checkedNum}</span> Products
          Selected
        </div>
        <Button disabled={loading} onClick={onDelete} variant="destructive">
          {loading ? "Loading ..." : "Delete At Once"}
        </Button>
        <Button disabled={loading} onClick={() => selectAll(allIds)}>
          Select All
        </Button>
        <Button disabled={loading} onClick={unselectAll}>
          Unselect
        </Button>
      </div>
    )
  );
}
