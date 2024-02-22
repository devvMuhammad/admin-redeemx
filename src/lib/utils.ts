import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toDashCase(input: string): string {
  return input.toLowerCase().split(" ").join("-");
}

export function toTitleCase(input: string): string {
  // Replace camel case with spaces and capitalize each word
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase());
}
