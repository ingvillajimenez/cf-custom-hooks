import { useId } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function LocalStorage() {
  const id = useId();
  const [value, setValue] = useLocalStorage("input:name", "");

  return (
    <section>
      <h2>Local Storage</h2>
      <article>
        <label htmlFor={id}>Value saved in localStorage</label>
        <br />
        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </article>
    </section>
  );
}

export default LocalStorage;
