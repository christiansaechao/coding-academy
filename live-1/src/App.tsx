import { useState } from "react";
import { Todos } from "./components/Todos";
import type { TodoType } from "./types/todo.types";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  function handleCreateTodo() {
    setTodos([...todos, { title: inputValue, isComplete: false }]);
  }

  function handleCompleteTodo(todo: TodoType) {
    const updatedTodos = todos.map((prev) => {
      if (todo.title === prev.title) {
        return { title: todo.title, isComplete: !prev.isComplete };
      } else {
        return prev;
      }
    });

    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todo: TodoType) {
    const updatedTodos = todos.filter((prev) => todo.title != prev.title);
    setTodos(updatedTodos);
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Add Todo</button>
      <Todos
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
