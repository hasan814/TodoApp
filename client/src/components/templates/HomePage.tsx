"use client";

import { addTodo, updateSearchTerm } from "@/redux/todoSlice";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";

import FilterBtn from "../modules/FilterBtn";
import TodoList from "../modules/TodoList";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addTodoHandler = () => {
    if (newTodoTitle.trim() !== "") {
      dispatch(
        addTodo({
          title: newTodoTitle.trim(),
          description: newTodoDescription.trim(),
        })
      );
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  const searchHandler = (value: string) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 sm:mt-8 p-4">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4">
        <input
          type="text"
          value={newTodoTitle}
          placeholder="Add Todo Title"
          onChange={(event) => setNewTodoTitle(event.target.value)}
          className="flex-grow w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        />
        <input
          type="text"
          value={newTodoDescription}
          placeholder="Add Todo Description"
          onChange={(event) => setNewTodoDescription(event.target.value)}
          className="flex-grow w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none mt-2 sm:mt-0"
        />
        <button
          onClick={addTodoHandler}
          className="bg-indigo-600 text-white p-3 rounded-md shadow-md hover:bg-indigo-500 w-full sm:w-auto"
        >
          <BsPlus className="w-6 h-6 mx-auto" />
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 mb-6">
        <FilterBtn />
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(event) => searchHandler(event.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
          />
          <button className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300">
            <BsSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default HomePage;
