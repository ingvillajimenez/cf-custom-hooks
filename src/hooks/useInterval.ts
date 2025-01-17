import { useEffect, useRef } from "react";

type Callback = () => void;

export function useInterval(ms: number, callback: Callback) {
  const ref = useRef<Callback>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      ref.current?.();
    }

    const id = setInterval(tick, ms);
    return () => clearInterval(id);
  }, [ms]);
}
