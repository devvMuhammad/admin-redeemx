import { cn } from "@/lib/utils";

export default function Heading({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={cn("font-extrabold text-4xl tracking-tighter", className)}>
      {children}
    </h1>
  );
}
