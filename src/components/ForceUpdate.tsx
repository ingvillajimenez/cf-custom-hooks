import { useRef } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";

function ForceUpdate() {
  const forceUpdate = useForceUpdate();

  const renders = useRef(0);
  renders.current++;

  return (
    <section>
      <h2>Force Update</h2>
      <p>{renders.current}</p>
      <button onClick={() => forceUpdate()}>Re-render</button>
    </section>
  );
}

export default ForceUpdate;
