"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function SortSelect() {
  const [option, setOption] = useState("name.1");
  return (
    <Select value={option} onValueChange={(value) => setOption(value)}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="price.1">Price: Low to High</SelectItem>
          <SelectItem value="price.-1">Price: High to Low</SelectItem>
          <SelectItem value="date.1">Newest Arrivals</SelectItem>
          <SelectItem value="sold.1">Best Sellers</SelectItem>
          <SelectItem value="name.1">A-Z</SelectItem>
          <SelectItem value="name.-1">Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
