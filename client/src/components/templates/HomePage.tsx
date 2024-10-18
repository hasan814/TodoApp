"use client";

import { addTodo, fetchTodos, updateSearchTerm } from "@/redux/todoSlice";
import { useState, ChangeEvent, useEffect } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import FilterBtn from "../modules/FilterBtn";
import TodoList from "../modules/TodoList";

const HomePage = () => {
  // =============== Dispatch ===============
  const dispatch: AppDispatch = useDispatch();

  // =============== State ===============
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // =============== Effect ===============
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // =============== Add Function ===============
  const addTodoHandler = () => {
    if (newTodoTitle.trim()) {
      dispatch(
        addTodo({ title: newTodoTitle, description: newTodoDescription })
      );
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  // =============== Search Function ===============
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  // =============== Rendering ===============
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-4 sm:mt-8 p-4 bg-white rounded-lg shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
          <motion.input
            type="text"
            value={newTodoTitle}
            placeholder="Add Todo Title"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNewTodoTitle(event.target.value)
            }
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="text"
            value={newTodoDescription}
            placeholder="Add Todo Description"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setNewTodoDescription(event.target.value)
            }
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none mt-2 sm:mt-0"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            onClick={addTodoHandler}
            className="bg-indigo-600 text-white p-3 rounded-md shadow-md hover:bg-indigo-500 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsPlus className="w-6 h-6 mx-auto" />
          </motion.button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-6">
          <FilterBtn />
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <motion.input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              onChange={searchHandler}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsSearch className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TodoList />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
