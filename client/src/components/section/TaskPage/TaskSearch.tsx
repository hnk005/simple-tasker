import { TaskContext } from "@/providers/TaskProvider";
import { ReactElement, useContext, useState } from "react";

const TaskSearch = (): ReactElement => {
  const [search, setSearch] = useState("");
  const { handleSearch } = useContext(TaskContext);

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden p-2 m-2">
      <input
        value={search}
        type="text"
        placeholder="Search tasks..."
        className="px-3 py-2 outline-none text-gray-700"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-green-600 rounded-md text-white px-4 py-2 flex items-center space-x-2 "
        onClick={() => handleSearch(search)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
        <span>Search</span>
      </button>
    </div>
  );
};

export default TaskSearch;
