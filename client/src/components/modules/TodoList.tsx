"use client";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { Todo } from "@/types";

import TodoItem from "./TodoItem";

const selectFilteredTodos = createSelector(
  [
    (state: any) => state.todos,
    (state: any) => state.filter,
    (state: any) => state.searchTerm,
  ],
  (todos: Todo[], filter: string, searchTerm: string) => {
    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }
);

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <ul className="space-y-4">
      {filteredTodos.length === 0 ? (
        <li className="text-center text-gray-500">No todos found</li>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
