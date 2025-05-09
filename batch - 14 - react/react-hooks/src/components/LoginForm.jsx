import { useRef } from "react";

function LoginForm() {
  const inputRef = useRef();

  function handleButtonClick() {
    // const inputValue = document.getElementById("my-input").value;
    // console.log(inputValue);

    // {current : input}
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        id="my-input"
        placeholder="Enter something"
      />
      <br />
      <br />
      <button onClick={() => handleButtonClick()}>Click me</button>
    </>
  );
}

export default LoginForm;
