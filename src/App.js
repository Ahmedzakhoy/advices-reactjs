import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Another Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice in this session
      </p>
    </div>
  );
}

export default App;
