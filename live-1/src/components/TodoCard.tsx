import React from "react";
import type { TodoType } from "../types/todo.types";
type Todos = {
  todo: TodoType;
  handleCompleteTodo: (todo: TodoType) => void;
  handleDeleteTodo: (todo: TodoType) => void;
};

export const TodoCard = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
}: Todos) => {
  return (
    <div
      className={`${todo.isComplete ? "bg-green-500" : "bg-red-500"} border rounded-2xl p-20`}
    >
      <p>{todo.isComplete + ""}</p>
      <h3>{todo.title}</h3>
      <div className="flex gap-2">
        <button onClick={() => handleCompleteTodo(todo)}>Complete</button>
        <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
      </div>
    </div>
  );
};
