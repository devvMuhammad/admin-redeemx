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
import { createQueryStringFunction } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

export default function CategorySelect() {
  const [isPending, startTransition] = useTransition();
  const { searchParams, router, pathname, createQueryString } =
    useChangeSearchParamsSetup();

  const currentCategory = searchParams.get("category") || "All";

  return (
    <Select
      disabled={isPending}
      defaultValue="All"
      value={currentCategory}
      onValueChange={(val) => {
        startTransition(() => {
          router.push(
            pathname + "?" + createQueryString("category", val, searchParams)
          );
        });
      }}
    >
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
  );
}
