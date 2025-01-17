import { useEffect, useRef } from "react";

export function usePrevious<Value>(value: Value) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
