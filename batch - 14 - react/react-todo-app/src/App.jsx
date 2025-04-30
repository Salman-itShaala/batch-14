import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);

  // {todoTitle, todoDesc, completed, todoId}

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  function addTodo(e) {
    e.preventDefault(); // to prevent the page refresh

    const todoObj = {
      todoTitle: todoTitle,
      todoDesc: todoDesc,
      completed: false,
      todoId: Date.now(),
    };

    console.log(todos);

    setTodos([...todos, todoObj]);
  }

  console.log(todos);

  return (
    <div>
      <Header />

      <div className="form-wrapper">
        <form onSubmit={(e) => addTodo(e)}>
          <div>
            <label htmlFor="todo-title">Todo title : </label>
            <input
              required
              id="todo-title"
              type="text"
              placeholder="Enter todo title"
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="todo-description">Todo Description : </label>
            <input
              required
              type="text"
              id="todo-description"
              placeholder="Enter todo Description"
              onChange={(e) => setTodoDesc(e.target.value)}
            />
          </div>
          <button type="submit">Add Todo</button>
        </form>
      </div>

      <div className="all-todos">
        <h2>All Todos</h2>
        <div className="todos-wrapper">
          {todos.map((todo) => {
            return (
              <div className="todo-card">
                <p className="todo-title">{todo.todoTitle}</p>
                <p className="todo-desc">{todo.todoDesc}</p>
                <button className="delete-btn">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
