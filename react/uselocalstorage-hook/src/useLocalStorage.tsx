import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, value) => {
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem(key));
    setStoredValue(mode);
    if (!mode || value.length !== 0) {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(mode);
    }
  }, [value]);

  return [storedValue, setStoredValue];
};
