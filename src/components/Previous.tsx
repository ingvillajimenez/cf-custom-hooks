import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

function Previous() {
  const [state, setState] = useState("Initial");
  const previousValue = usePrevious(state);

  return (
    <section>
      <h2>Previous</h2>

      <article>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.currentTarget.value)}
        />

        <p>{previousValue}</p>
      </article>
    </section>
  );
}

export default Previous;
