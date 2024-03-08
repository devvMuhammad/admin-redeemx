"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useChangeSearchParamsSetup from "@/hooks/useChangeSearchParamsSetup";
import { useTransition } from "react";

export default function OrdersSort() {
  const [isPending, startTransition] = useTransition();
  const { searchParams, pathname, router, createQueryString } =
    useChangeSearchParamsSetup();
  const currentSort = searchParams.get("sort") || "name.asc";
  return (
    <Select
      disabled={isPending}
      value={currentSort}
      onValueChange={(value) =>
        startTransition(() => {
          router.push(
            pathname + "?" + createQueryString("sort", value, searchParams)
          );
        })
      }
    >
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="name.asc">A-Z</SelectItem>
          <SelectItem value="name.desc">Z-A</SelectItem>
          <SelectItem value="amount.asc">Amount: Low to High</SelectItem>
          <SelectItem value="amount.desc">Amount: High to Low</SelectItem>
          <SelectItem value="date.desc">Date: Most Recent</SelectItem>
          <SelectItem value="date.asc">Date: Most Late</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
