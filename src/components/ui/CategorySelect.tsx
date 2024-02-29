"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createQueryStringFunction } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

export default function CategorySelect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback(createQueryStringFunction, [
    searchParams,
  ]);

  const currentCategory = searchParams.get("category") || "All";

  // const [category, setCategory] = useState(currentCategory);

  return (
    <Select
      defaultValue="All"
      value={currentCategory}
      onValueChange={(val) => {
        router.push(
          pathname + "?" + createQueryString("category", val, searchParams)
        );
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
