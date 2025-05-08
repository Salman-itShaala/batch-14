import { createContext, useState } from "react";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

// step 1.
export const CounterContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <CounterContext.Provider value={[counter, setCounter]}>
        <h1>Counter is {counter}</h1>
        <Counter1 />
        <Counter2 />
        <NewComponent />
      </CounterContext.Provider>
    </>
  );
}

function NewComponent() {
  console.log("api call");

  return (
    <>
      <h1>I'm new component</h1>
    </>
  );
}

export default App;
