"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  filterTodo,
  markAllCompleted,
  markAllIncompleted,
} from "@/redux/actions";
import { AppDispatch } from "@/types/store";

const FilterBtn = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentFilter = useSelector((state: any) => state.filter);

  const filterHandler = (filter: string) => {
    dispatch(filterTodo(filter));
  };

  return (
    <div className="flex items-center gap-4">
      <select
        value={currentFilter}
        onChange={(event) => filterHandler(event.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
      >
        <option value="ALL">Default</option>
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
