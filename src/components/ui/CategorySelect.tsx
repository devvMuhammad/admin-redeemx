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

const categories = ["All", "Laptops", "Mobiles", "Gift Cards", "Accessories"];

export default function CategorySelect() {
  const [category, setCategory] = useState("All");
  return (
    <Select
      defaultValue="All"
      value={category}
      onValueChange={(val) => setCategory(val)}
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
