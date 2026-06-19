import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TodoHero";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="todo-wrapper">
        <TODOHero todos_completed={0} total_todos={0} />
        <Form />
      </div>
    </div>
  );
}

export default App;
