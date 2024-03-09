import {
  createQueryStringFunction,
  deleteQueryStringFunction,
} from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useChangeSearchParamsSetup() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback(createQueryStringFunction, [
    searchParams,
  ]);
  const deleteQueryString = useCallback(deleteQueryStringFunction, [
    searchParams,
  ]);
  return {
    searchParams,
    router,
    pathname,
    createQueryString,
    deleteQueryString,
  };
}
