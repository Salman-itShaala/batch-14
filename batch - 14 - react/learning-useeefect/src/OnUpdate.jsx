import { useEffect, useState } from "react";

function OnUpdate() {
  const [counter1, setCounter1] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    // mount, whenver counter1 is changing
    console.log("counting subtotal");
  }, []);

  return (
    <div>
      <div>
        <h3>Counter 1 is {counter1}</h3>
        <button onClick={() => setCounter1(counter1 + 1)}>Click me</button>
      </div>

      <div>
        <button onClick={() => setShow(!show)}>Show/hide</button>
        {show && <h3>Emi available</h3>}
      </div>
    </div>
  );
}

export default OnUpdate;
