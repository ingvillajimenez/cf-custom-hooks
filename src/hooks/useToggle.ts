import { useCallback, useMemo, useState } from "react";

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return useMemo(() => {
    return [state, toggle] as const;
  }, [state, toggle]);
}
