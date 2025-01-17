import { RefObject, useEffect } from "react";

// /**
//  *
//  * @param {React.RefObject<HTMLElement>} ref
//  */

export function useAddMenuOpenClass(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    ref.current?.classList.add("menu-open");

    return () => {
      ref.current?.classList.remove("menu-open");
    };
  }, [ref]);
}
