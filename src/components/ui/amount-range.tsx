"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useChangeSearchParamsSetup from "@/hooks/useChangeSearchParamsSetup";
import { useState, useTransition } from "react";
import { Slider } from "./slider";
import { CheckIcon } from "lucide-react";

export function PriceFilter({ maximumPrice = 5000 }) {
  // replace it later
  const { searchParams, createQueryString, pathname, router } =
    useChangeSearchParamsSetup();

  const currentPrice = searchParams.get("amount")?.split("-").map(Number);

  const [priceRange, setPriceRange] = useState([
    currentPrice ? currentPrice[0] : 0,
    currentPrice ? currentPrice[1] : maximumPrice,
  ]);
  const [isPending, startTransition] = useTransition();
  return (
    <div className="justify-end flex flex-1 items-center gap-4">
      <h1 className="font-bold text-left tracking-wide">Amount</h1>

      {/* PriceRange component code */}
      <Slider
        className="max-w-44"
        max={maximumPrice}
        step={100}
        value={priceRange}
        onValueChange={(value) => setPriceRange(value)}
      />
      <div className="flex items-center space-x-4">
        <Input
          type="number"
          inputMode="numeric"
          min={0}
          max={priceRange[1]}
          className="h-10 w-20"
          value={priceRange[0]}
          onChange={(e) => {
            const value = Number(e.target.value);
            startTransition(() => {
              setPriceRange([value, priceRange[1]]);
            });
          }}
        />
        <span>-</span>
        <Input
          type="number"
          inputMode="numeric"
          min={priceRange[0]}
          max={500}
          className="h-10 w-20"
          value={priceRange[1]}
          onChange={(e) => {
            const value = Number(e.target.value);
            startTransition(() => {
              setPriceRange([priceRange[0], value]);
            });
          }}
        />
      </div>
      {/* <div className="w-full flex justify-end"> */}
      <Button
        disabled={isPending}
        size="sm"
        className="font-bold tracking-wide right-0 inline-flex"
        onClick={() => {
          startTransition(() => {
            router.push(
              pathname +
                "?" +
                createQueryString(
                  "amount",
                  `${priceRange[0]}-${priceRange[1]}`,
                  searchParams
                )
            );
          });
        }}
      >
        <CheckIcon className="h-5 w-5" />
      </Button>
      {/* </div> */}
    </div>
  );
}

export default PriceFilter;
