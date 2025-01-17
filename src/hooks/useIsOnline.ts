import { useSyncExternalStore } from "react";

export function useIsOnline() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);

      return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
      };
    },
    () => navigator.onLine,
    () => true
  );
}

// import { useEffect, useState } from "react";

// export function useIsOnline() {
//   const [state, setState] = useState(() => navigator.onLine);

//   useEffect(() => {
//     function listener() {
//       setState(navigator.onLine);
//     }

//     window.addEventListener("online", listener);
//     window.addEventListener("offline", listener);

//     return () => {
//       window.removeEventListener("online", listener);
//       window.removeEventListener("offline", listener);
//     };
//   }, []);

//   return state;
// }
