import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrese() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrese}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
