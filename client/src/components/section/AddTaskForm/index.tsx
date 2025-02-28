import { useState } from "react";

const AddTaskForm = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "Low",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.info("New Task:", task);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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

                {/* Due Date */}
                <div className="col-span-1">
                    <label className="text-gray-700 font-medium">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                    />
                </div>

                {/* Description */}
                <div className="col-span-2">
                    <label className="text-gray-700 font-medium">Description</label>
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
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-5 py-2 rounded-md flex items-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Add Task</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTaskForm;
