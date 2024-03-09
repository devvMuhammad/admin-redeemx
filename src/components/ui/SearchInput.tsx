"use client";
import { ListRestartIcon, SearchIcon } from "lucide-react";
import { Input } from "./input";
import { useEffect, useState, useTransition } from "react";
import useDebounce from "@/hooks/useDebounce";
import useChangeSearchParamsSetup from "@/hooks/useChangeSearchParamsSetup";
import Spinner from "./spinner";
import { Button } from "./button";

export default function SearchInput() {
  const {
    pathname,
    searchParams,
    createQueryString,
    deleteQueryString,
    router,
  } = useChangeSearchParamsSetup();
  const [firstRender, setFirstRender] = useState(true);
  const input = searchParams.get("search");
  const [search, setSearch] = useState(input || "");
  const debouncedSearch = useDebounce(search);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (debouncedSearch.length <= 0) {
      if (!firstRender)
        router.push(pathname + "?" + deleteQueryString("search", searchParams));
      return;
    }
    startTransition(() => {
      router.push(
        pathname +
          "?" +
          createQueryString("search", debouncedSearch, searchParams)
      );
    });
    setFirstRender(false);
  }, [debouncedSearch]);
  return (
    <div className=" relative flex items-center">
      <label htmlFor="search" className="flex items-center">
        <SearchIcon className="absolute left-4" />
      </label>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        className="border border-white pl-12 min-w-[400px] max-w-[500px] h-10"
        placeholder="Search an order by Name"
      />
      <Button
        size="icon"
        className="ml-2 p-1 flex items-center justify-center"
        disabled={isPending || search.length <= 0}
        onClick={() => {
          setSearch("");
          startTransition(() => {
            router.push(
              pathname + "?" + deleteQueryString("search", searchParams)
            );
          });
        }}
      >
        <ListRestartIcon className="h-8 w-8 cursor-pointer" />
      </Button>
      {isPending && (
        <Spinner size="sm" className="ml-2 bg-black dark:bg-white" />
      )}
    </div>
  );
}
