"use client";

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { createSelector } from "reselect";

// Memoized selector using reselect
const selectFilteredTodos = createSelector(
  [
    (state) => state.todos,
    (state) => state.filter,
    (state) => state.searchTerm,
  ],
  (todos, filter, searchTerm) => {
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
  // Use the memoized selector
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
