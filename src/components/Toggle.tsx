import { useToggle } from "../hooks/useToggle";

function Toggle() {
  const [isEnabled, toggle] = useToggle();

  return (
    <section>
      <h2>Toggle</h2>
      <article>
        <label>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => toggle()}
          />
          <span>{isEnabled ? "Enabled" : "Disabled"}</span>
        </label>
      </article>
    </section>
  );
}

export default Toggle;
