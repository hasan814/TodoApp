import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "@/redux/actions";

const FilterBtn = () => {
  // ============= Dispatch ==============
  const dispatch = useDispatch();

  // ============= Selector ==============
  const currentFilter = useSelector((state) => state.filter);

  // ============= Filter Function ==============
  const filterHandler = (filter) => {
    dispatch(filterTodo(filter));
  };

  // ============= Rendering ==============
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
    </div>
  );
};

export default FilterBtn;
