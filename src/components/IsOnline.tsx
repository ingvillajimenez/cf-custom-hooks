import { useIsOnline } from "../hooks/useIsOnline";

function IsOnline() {
  const isOnline = useIsOnline();

  return (
    <section>
      <h2>Is Online?</h2>
      <article>{isOnline ? <p>Online</p> : <p>Offline</p>}</article>
    </section>
  );
}

export default IsOnline;
