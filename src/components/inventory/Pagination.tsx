"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Spinner from "../ui/spinner";

export default function Pagination({
  currentProducts,
  numberOfProducts,
}: {
  currentProducts: number;
  numberOfProducts: number;
}) {
  const perPage = 5;
  const numberOfPages = Math.ceil(numberOfProducts / perPage);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get("page") || 1);
  const [isPendingNext, startTransitionNext] = useTransition();
  const [isPendingPrev, startTransitionPrev] = useTransition();

  const createQueryString = useCallback(
    (key: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      return params.toString();
    },
    [searchParams]
  );

  function nextPage() {
    currentPage++;
    startTransitionNext(() => {
      router.push(
        pathname + "?" + createQueryString("page", String(currentPage))
      );
    });
  }
  function prevPage() {
    currentPage--;
    startTransitionPrev(() => {
      router.push(
        pathname + "?" + createQueryString("page", String(currentPage))
      );
    });
  }

  return (
    <div className="flex items-center justify-between p-2 text-lg rounded-lg">
      <h1>
        Showing{" "}
        <span className="font-bold">{(currentPage - 1) * perPage + 1}</span> to{" "}
        <span className="font-bold">
          {(currentPage - 1) * perPage +
            (currentProducts < 5 ? currentProducts : 5)}
        </span>{" "}
        of <span className="font-bold">{numberOfProducts}</span> Results
      </h1>
      <div className="flex items-center space-x-2">
        <Button
          onClick={prevPage}
          className="text-sm"
          disabled={!currentPage || +currentPage === 1 || isPendingPrev}
        >
          {isPendingPrev ? (
            <>
              Loading <Spinner size="xs" className="bg-white text-white ml-2" />
            </>
          ) : (
            <>
              Previous <ArrowLeft />
            </>
          )}
        </Button>
        <Button
          onClick={nextPage}
          className="text-sm"
          // disabled={isPending || currentPage >= numberOfPages}
          disabled={currentPage >= numberOfPages || isPendingNext}
        >
          {isPendingNext ? (
            <>
              Loading <Spinner size="xs" className="bg-white ml-2" />
            </>
          ) : (
            <>
              Next <ArrowRight />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
