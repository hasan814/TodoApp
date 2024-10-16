"use client";

import { useDispatch } from "react-redux";
import {
  makeCompleted,
  makeIncompleted,
  removeTodo,
  toggleTodo,
} from "@/redux/actions";
import {
  FaCheck,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  // ================ Dispatch ================
  const dispatch = useDispatch();

  // ================ Rendering ================
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center space-x-4">
        <span className="font-bold">{index + 1}</span>
        <span
          className={`${
            todo.completed ? "line-through text-red-500" : ""
          } text-gray-800`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(toggleTodo(index))}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          {todo.completed ? (
            <FaToggleOff className="text-red-500" />
          ) : (
            <FaToggleOn className="text-green-500" />
          )}
        </button>
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            onClick={() => dispatch(makeCompleted(index))}
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            onClick={() => dispatch(makeIncompleted(index))}
            className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
