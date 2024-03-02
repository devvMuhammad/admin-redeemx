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

export default function SortSelect() {
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
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="price.asc">Price: Low to High</SelectItem>
          <SelectItem value="price.desc">Price: High to Low</SelectItem>
          {/* <SelectItem value="time.1">Most Recent</SelectItem> */}
          <SelectItem value="name.asc">A-Z</SelectItem>
          <SelectItem value="name.desc">Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
