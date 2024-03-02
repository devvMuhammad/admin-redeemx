"use client";
import Link from "next/link";

export default function Component({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center dark bg-black">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl text-white">
          Oops! There was an error
        </h1>
        <p className="max-w-[600px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
          {error.message}
        </p>
      </div>
      <button
        onClick={reset}
        className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-white px-8 text-white font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
      >
        Try Again
      </button>
    </div>
  );
}
