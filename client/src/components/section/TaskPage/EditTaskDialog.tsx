import { useState, useContext, useEffect } from "react";
import { TaskContext } from "@/providers/TaskProvider";
import DialogCommon from "@/components/common/DialogCommon";
import { TaskInterface } from "@/core/interface";
import { DialogPanel } from "@headlessui/react";

const EditTaskDialog = () => {
  const { tasks, editTaskId, closeEdit, handleEdit } = useContext(TaskContext);
  const [task, setTask] = useState<TaskInterface | null>(null);

  useEffect(() => {
    const taskToEdit = tasks.find((t) => t.id === editTaskId);
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [editTaskId, tasks]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (task) {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      handleEdit(task);
      closeEdit();
    }
  };

  if (!task) return null;

  return (
    <DialogCommon open={editTaskId ? true : false} onClose={closeEdit}>
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl"
          >
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Edit Task
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 max-md:grid-cols-1 "
              >
                {/* Title */}
                <div className="col-span-1">
                  <label className="text-gray-700 font-medium">Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Enter task title"
                    required
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>

                {/* Description */}
                <div className="col-span-2 max-md:col-span-1">
                  <label className="text-gray-700 font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    placeholder="Enter task description"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>

                {/* Priority */}
                <div className="col-span-1">
                  <label className="text-gray-700 font-medium">Priority</label>
                  <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="col-span-2 flex justify-end max-md:col-span-1 max-md:justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center space-x-2"
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </DialogCommon>
  );
};

export default EditTaskDialog;
