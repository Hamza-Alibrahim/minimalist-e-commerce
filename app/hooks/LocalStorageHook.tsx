/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined")
      return defaultValue instanceof Function ? defaultValue() : defaultValue;

    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    else if (typeof defaultValue === "function") return defaultValue();
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
