"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

export default function CategorySelect() {
  const [category, setCategory] = useState("All");
  return (
    <Select
      defaultValue="A"
      value={category}
      onValueChange={(val) => setCategory(val)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue className="text-white" placeholder="Select Category" />
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
