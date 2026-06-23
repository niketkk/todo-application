import "../style.css";

function TodoList({ tasks, deleteTask }) {
  // calling the delete function when passed in app
  function handleDelete(id) {
    deleteTask(id);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={handleDelete.bind(null, task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
