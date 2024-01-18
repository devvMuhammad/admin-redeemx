import { cn } from "@/lib/utils";

export default function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-thin bg-white text-black",
        className
      )}
    >
      {children}
    </p>
  );
}
