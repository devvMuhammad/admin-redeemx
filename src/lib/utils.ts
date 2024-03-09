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

export const createQueryStringFunction = (
  key: string,
  value: string,
  searchParams: URLSearchParams
): string => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(key, value);
  return params.toString();
};

export const deleteQueryStringFunction = (
  key: string,
  searchParams: URLSearchParams
): string => {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(key);
  return params.toString();
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function errorHandlingWrapper<T>(
  serverFunction: (...args: any[]) => Promise<T>,
  customError: { type: "db" | string; fallbackMessage: string }
) {
  return async function (...args: any[]) {
    try {
      // Call the server-side function with provided arguments
      const result = await serverFunction(...args);
      return result;
    } catch (error) {
      // Handle the error here, you can log it or do other necessary actions
      console.error("Error caught:", (error as Error).message);
      if (customError.type === "db") {
        throw new Error(customError.fallbackMessage);
      }
      throw new Error((error as Error).message); // Re-throw the error to maintain the original behavior
    }
  };
}
