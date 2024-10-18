"use client";

import { deleteTodo, toggleTodo, updateTodo } from "@/redux/todoSlice";
import { TodoItemProps } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { toast } from "react-hot-toast";

import {
  FaEdit,
  FaSave,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState<string>(
    todo.description || ""
  );

  // Handler to save the edited todo
  const updateHandler = () => {
    if (updatedText.trim() !== "" && updatedDescription.trim() !== "") {
      dispatch(
        updateTodo({
          id: todo._id,
          updatedTodo: {
            title: updatedText.trim(),
            description: updatedDescription.trim(),
            completed: todo.completed,
          },
        })
      )
        .unwrap()
        .then(() => toast.success("Todo updated successfully!"))
        .catch(() => toast.error("Failed to update todo."));
      setIsEditing(false); // Disable editing mode after updating
    } else {
      toast.error("Title and description cannot be empty.");
    }
  };

  const toggleHandler = () => {
    dispatch(toggleTodo(todo._id))
      .unwrap()
      .then(() =>
        toast.success(
          `Todo ${todo.completed ? "incompleted" : "completed"} successfully!`
        )
      )
      .catch(() => toast.error("Failed to toggle todo."));
  };

  // Handler to delete a todo item
  const deleteHandler = () => {
    dispatch(deleteTodo(todo._id))
      .unwrap()
      .then(() => toast.success("Todo deleted successfully!"))
      .catch(() => toast.error("Failed to delete todo."));
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
              {todo.title}
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
            {/* Toggle the completion status */}
            <button
              onClick={toggleHandler}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              {todo.completed ? (
                <FaToggleOff className="text-red-500" />
              ) : (
                <FaToggleOn className="text-green-500" />
              )}
            </button>

            {/* Enable editing mode */}
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
            >
              <FaEdit />
            </button>

            {/* Delete the todo item */}
            <button
              onClick={deleteHandler}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
