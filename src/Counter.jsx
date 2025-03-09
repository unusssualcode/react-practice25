import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>
        count -
      </button>
    </>
  );
}

export default Counter;
