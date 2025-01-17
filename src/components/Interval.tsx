import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

function Interval() {
  const [state, setState] = useState(0);

  useInterval(1000, () => setState((prev) => prev + 1));

  return (
    <section>
      <h2>Interval</h2>
      <p>{state}</p>
    </section>
  );
}

export default Interval;
