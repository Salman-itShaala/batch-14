import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { counterReducer, decrement, increment } from "./slices/counterSlice";
import { getTodo } from "./slices/todosSlice";
import { useEffect } from "react";

function App() {
  const todoState = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  console.log(todoState); // {value : [], status : }

  if (todoState.status == "loading") {
    return <h1>Loading</h1>;
  }
  if (todoState.status == "success") {
    return (
      <>
        {todoState.value.map((todo) => {
          return <li>{todo.todo}</li>;
        })}
      </>
    );
  }
  if (todoState.status == "error") {
    return <h1 style={{ color: "red" }}>Something went wrong</h1>;
  }
}

export default App;
