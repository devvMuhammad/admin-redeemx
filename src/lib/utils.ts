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

export function errorHandlingWrapper(
  serverFunction: (...args: any[]) => Promise<any>,
  customError: { type: "db" | string; fallbackMessage: string }
) {
  return async function (...args: any[]) {
    try {
      // Call the server-side function with provided arguments
      const result = await serverFunction(...args);
      return result;
    } catch (error) {
      // Handle the error here, you can log it or do other necessary actions
      if (customError.type === "db") {
        throw new Error(customError.fallbackMessage);
      }
      console.error("Error caught:", (error as Error).message);
      throw new Error((error as Error).message); // Re-throw the error to maintain the original behavior
    }
  };
}
