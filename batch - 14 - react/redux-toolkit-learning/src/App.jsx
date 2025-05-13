import { createContext, useContext, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

function App() {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <Child1 />
      <Child2 />
    </div>
  );
}

function Child1() {
  return (
    <div style={{ border: "4px solid red", padding: "40px" }}>
      <h1>We are in Child 1 component</h1>
      <GrandChild1 />
    </div>
  );
}

function Child2() {
  return (
    <div style={{ border: "4px solid yellow", padding: "40px" }}>
      <h1>We are in Child2 component</h1>
      <GrandChild2 />
    </div>
  );
}

function GrandChild1() {
  // subsribe
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "2px solid red", padding: "40px" }}>
      <h1>Counter is {counter}</h1>
      <button onClick={() => dispatch(decrement())}>Click me</button>
    </div>
  );
}

function GrandChild2() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div style={{ border: "2px solid red", padding: "40px" }}>
      <h1>Counter is {counter}</h1>
      <button onClick={() => dispatch(increment())}>Click me</button>
    </div>
  );
}

export default App;
