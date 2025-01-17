import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

function ClickOutside() {
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(listRef, () => setIsOpen(false));

  return (
    <section>
      <h2>Click outside</h2>
      <article>
        <button onClick={() => setIsOpen(true)}>Open</button>

        <ul ref={listRef} style={{ display: isOpen ? "block" : "none" }}>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
          <li>Amet</li>
        </ul>
      </article>
    </section>
  );
}

export default ClickOutside;
