import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("all"); // all, music, shorts

  return (
    <div>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("music")}>Music</button>
      <button onClick={() => setTab("shorts")}>Shorts</button>

      {tab === "all" && <h1>All Videos</h1>}
      {tab === "music" && <h1>Only Music</h1>}
      {tab === "shorts" && <h1>Only Shorts</h1>}
    </div>
  );
}

function NewComponent() {
  let [count, setCount] = useState(0); // [1]

  console.log("HII");

  function updateCount() {
    setCount(count + 1); // count = 0 + 1 ==> 1
  }

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h1>Count is {count}</h1>
      <button onClick={updateCount}>Click me</button>
    </div>
  );
}

export default App;
