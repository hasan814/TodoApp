"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  filterTodos,
  markAllCompleted,
  markAllIncompleted,
} from "@/redux/todoSlice";

const FilterBtn = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="flex items-center gap-4">
      <select
        value={currentFilter}
        onChange={(e) => dispatch(filterTodos(e.target.value))}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-500"
      >
        Mark all Completed
      </button>
      <button
        onClick={() => dispatch(markAllIncompleted())}
        className="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-500"
      >
        Mark all Incompleted
      </button>
    </div>
  );
};

export default FilterBtn;
