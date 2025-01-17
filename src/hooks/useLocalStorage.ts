import { useCallback, useMemo, useState } from "react";

export function useLocalStorage<Value>(key: string, initialValue?: Value) {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    if (!value) return initialValue;
    return JSON.parse(value) as Value;
  });

  const setter = useCallback(
    (value: Value) => {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return useMemo(() => [state, setter] as const, [state, setter]);
}
