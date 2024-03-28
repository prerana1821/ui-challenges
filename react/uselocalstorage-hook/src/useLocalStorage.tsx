import { useEffect, useState } from "react";

// export const useLocalStorage = (key: string, value: string) => {
//   const [storedValue, setStoredValue] = useState("");

//   useEffect(() => {
//     const mode = JSON.parse(localStorage.getItem(key));
//     setStoredValue(mode);
//     if (!mode || value.length !== 0) {
//       localStorage.setItem(key, JSON.stringify(value));
//       setStoredValue(mode);
//     }
//   }, [value]);

//   return [storedValue, setStoredValue];
// };

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};
