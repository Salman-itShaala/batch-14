import { useContext } from "react";
import { CounterContext } from "../App";

function Counter2() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div
      style={{ border: "2px solid yellow", padding: "10px", marginTop: "40px" }}
    >
      <button onClick={() => setCounter(counter + 1)}>Increase counter2</button>
    </div>
  );
}

export default Counter2;
