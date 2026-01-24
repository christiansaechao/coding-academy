import React from "react";
import { TodoCard } from "./TodoCard";
import type { TodoType } from "../types/todo.types";

type Todos = {
  todos: TodoType[];
  handleCompleteTodo: (todo: TodoType) => void;
  handleDeleteTodo: (todo: TodoType) => void;
};

export const Todos = ({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}: Todos) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {todos.map((todo) => (
        <TodoCard
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
};
