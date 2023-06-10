import { useState } from 'react';

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = useState<T | null>(() => {
    const storedValue = localStorage.getItem(item);
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error('Error parsing stored value:', error);
      }
    }
    return null;
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
