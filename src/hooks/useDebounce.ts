import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}
