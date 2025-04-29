import "./App.css";
import Header from "./Header";

function App() {
  const isLoggedIn = true;

  const isOptionOpen = false;

  //

  function doSomething() {
    console.log("Do something function");
  }

  function doSomethingElse(userName) {
    console.log("Hello", userName);
  }

  return (
    <>
      <button onClick={doSomething}>Click me</button>

      <button onClick={() => doSomethingElse("Salman")}>Button 2</button>

      <h1>From app component</h1>
    </>
  );
}

export default App;
