import { useCallback, useState } from "react";

export function useForceUpdate() {
  const [, setState] = useState(Symbol());

  return useCallback(() => setState(Symbol()), []);
}
