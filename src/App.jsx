import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1>Tawsk Manager</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
