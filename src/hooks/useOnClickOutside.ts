import { RefObject, useEffect } from "react";

type Callback = () => void;

export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  callback: Callback
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      if (!ref.current) return;
      if (event.target instanceof Node && ref.current.contains(event.target))
        return;
      callback();
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}
