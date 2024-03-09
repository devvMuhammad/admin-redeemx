"use client";

import { Button } from "@/components/ui/button";

export default function Component({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center dark:bg-black">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
          Oops! There was an error
        </h1>
        <p className="max-w-[600px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
          {error.message}
        </p>
      </div>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
