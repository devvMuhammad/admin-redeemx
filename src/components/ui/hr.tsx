import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function HrLine({
  className,
  ...props
}: {
  className?: string;
  props?: HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      {...props}
      className={cn(
        "h-[2px] my-4 bg-gray-200 dark:bg-zinc-800 w-full",
        className
      )}
    ></div>
  );
}
