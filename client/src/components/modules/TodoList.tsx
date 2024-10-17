"use client";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TodoItem from "./TodoItem";

const selectFilteredTodos = createSelector(
  [
    (state: RootState) => state.todos.todos,
    (state: RootState) => state.todos.filter,
    (state: RootState) => state.todos.searchTerm,
  ],
  (todos, filter, searchTerm) => {
    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";
      const matchesSearch = todo.title
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
        filteredTodos.map((todo, index) => <TodoItem key={index} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
