import { useState } from "react";
import { Container } from "./styled";

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? "reverse" : "";

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <Container>
      <h1>Medieval</h1>
      <img
        src="/public/img/machado.png"
        alt="oi"
        className={`App-logo ${reverseClass}`}
      />
      <button type="button" onClick={handleClick}>
        Reverse {reverseClass}
      </button>
    </Container>
  );
}
export default App;
