"use client";

import { markAllCompleted, markAllIncompleted } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { filterTodos } from "@/redux/todoSlice";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";

const FilterBtn = () => {
  // ============= Dispatch ==============
  const dispatch: AppDispatch = useDispatch();

  // ============= State ==============
  const currentFilter = useSelector((state: RootState) => state.todos.filter);

  // ================ Filter Function ===============
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterTodos(e.target.value));
  };

  // ================ Rendering ===============
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.select
        value={currentFilter}
        onChange={handleFilterChange}
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </motion.select>

      <motion.button
        onClick={() => dispatch(markAllCompleted())}
        className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mark all Completed
      </motion.button>

      <motion.button
        onClick={() => dispatch(markAllIncompleted())}
        className="w-full sm:w-auto bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mark all Incompleted
      </motion.button>
    </motion.div>
  );
};

export default FilterBtn;
