"use client";

import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  makeCompleted,
  makeIncompleted,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "@/redux/actions";
import {
  FaCheck,
  FaEdit,
  FaSave,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
import { Todo } from "@/types";
import { AppDispatch } from "@/types/store";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch: AppDispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(todo.text);
  const [updatedDescription, setUpdatedDescription] = useState<string>(
    todo.description || ""
  );

  const updateHandler = () => {
    if (updatedText.trim() !== "" && updatedDescription.trim() !== "") {
      dispatch(
        updateTodo(todo.id, updatedText.trim(), updatedDescription.trim())
      );
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
      {isEditing ? (
        <div className="flex flex-col w-full">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="px-4 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Update title"
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="px-4 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Update description"
          />
          <div className="flex space-x-2">
            <button
              onClick={updateHandler}
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              <FaSave />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span
              className={`font-bold ${
                todo.completed ? "line-through text-red-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <span
              className={`text-sm ${
                todo.completed ? "line-through text-red-400" : ""
              }`}
            >
              {todo.description || "No description"}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              {todo.completed ? (
                <FaToggleOff className="text-red-500" />
              ) : (
                <FaToggleOn className="text-green-500" />
              )}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaTrash />
            </button>
            {!todo.completed && (
              <button
                onClick={() => dispatch(makeCompleted(todo.id))}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                <FaCheck />
              </button>
            )}
            {todo.completed && (
              <button
                onClick={() => dispatch(makeIncompleted(todo.id))}
                className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
