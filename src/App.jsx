import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <h1>Tawsk Manager</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
