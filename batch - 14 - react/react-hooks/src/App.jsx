import { useMemo, useReducer, useState } from "react";
import "./App.css";

function reducerFn(state, action) {
  if (action === "increase") {
    return state + 1;
  } else if (action === "decrease") {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducerFn, 0);

  const [count2, setCount2] = useState(0);

  const calculatedValue = useMemo(heavyOp, [count2]);

  console.log(calculatedValue);

  function heavyOp() {
    console.log("doing heavy operation");
    return (count2 * (count2 + 1)) / 2;
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <br />
      <br />

      <h1>Count 2 is {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Increase count 2</button>
    </>
  );
}

export default App;
