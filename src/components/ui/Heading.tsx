import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poopins = Poppins({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"],
});

export default function Heading({
  className,
  children,
  specialHeading = true,
}: {
  className?: string;
  children: React.ReactNode;
  specialHeading?: boolean;
}) {
  return (
    <h1
      className={cn(
        "font-extrabold text-4xl tracking-tighter",
        specialHeading && poopins.className,
        className
      )}
    >
      {children}
    </h1>
  );
}
