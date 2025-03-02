import { TaskContext } from "@/providers/TaskProvider";
import { useContext } from "react";

const TaskFilter = () => {
  const { filter, handleFilter } = useContext(TaskContext);
  const { priority, status } = filter;

  return (
    <div className="flex items-center gap-2 p-3">
      <span className="text-gray-600 font-medium">Filter by priority:</span>
      <select
        className="border border-gray-300 rounded-md p-2 text-gray-700"
        value={priority}
        onChange={(e) => handleFilter({ ...filter, priority: e.target.value })}
      >
        <option value=""></option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <span className="text-gray-600 font-medium">Filter by status:</span>
      <select
        className="border border-gray-300 rounded-md p-2 text-gray-700"
        value={status}
        onChange={(e) => handleFilter({ ...filter, status: e.target.value })}
      >
        <option value=""></option>
        <option value="Complete">Complete</option>
        <option value="Expired">Expired</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;
