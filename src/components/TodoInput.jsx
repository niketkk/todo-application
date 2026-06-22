import { useState } from "react";

function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="add a task"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoInput;
