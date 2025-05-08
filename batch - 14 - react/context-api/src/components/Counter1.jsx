import { useContext } from "react";
import { CounterContext } from "../App";

function Counter1() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <button onClick={() => setCounter(counter + 1)}>Increase counter1</button>
    </div>
  );
}

export default Counter1;
