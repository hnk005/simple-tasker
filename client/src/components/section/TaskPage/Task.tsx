import { TaskInterface } from "@/core/interface";
import { PriorityTask, StatusTask } from "@/core/type";
import { TaskContext } from "@/providers/TaskProvider";
import { ReactElement, useContext } from "react";

const Task = ({ task }: { task: TaskInterface }): ReactElement => {
    const { id, title, description, dueDate, status, priority } = task;
    const { openEdit, openDelete, handleComplete } = useContext(TaskContext);

    const getPriorityColor = (priority: PriorityTask) => {
        switch (priority) {
            case "High":
                return "text-red-600";
            case "Medium":
                return "text-yellow-600";
            case "Low":
                return "text-green-600";
            default:
                return "text-gray-600";
        }
    };

    const getTaskClass = (status: StatusTask) => {
        switch (status) {
            case "Complete":
                return "bg-green-100 border-green-500";
            case "Expired":
                return "bg-red-100 border-red-500";
            default:
                return "bg-white border-gray-300";
        }
    };

    return (
        <div className={`p-4 rounded-lg shadow-md border ${getTaskClass(status)}`}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold truncate w-2/3">{title}</h3>
                <span className={`text-sm ${getPriorityColor(priority)}`}>{priority}</span>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
            <div className="flex items-center text-gray-500 text-xs mt-2">
                <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 18h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
                Due: {dueDate ? new Date(dueDate).toLocaleDateString() : "No due date"}
            </div>
            <div className="flex flex-wrap justify-end mt-3 gap-2">
                {status !== "Complete" && (
                    <button
                        onClick={() => openEdit(id)}
                        className="bg-blue-100 text-blue-600 px-2 md:px-3 py-1 rounded flex items-center text-xs md:text-sm"
                    >
                        <svg className="h-4 w-4 md:h-5 md:w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Edit
                    </button>
                )}
                <button
                    onClick={() => openDelete(id)}
                    className="bg-red-100 text-red-600 px-2 md:px-3 py-1 rounded flex items-center text-xs md:text-sm"
                >
                    <svg className="h-4 w-4 md:h-5 md:w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Delete
                </button>
                {status !== "Complete" && status !== "Expired" && (
                    <button
                        onClick={() => handleComplete(id)}
                        className="bg-green-100 text-green-600 px-2 md:px-3 py-1 rounded flex items-center text-xs md:text-sm"
                    >
                        <svg className="h-4 w-4 md:h-5 md:w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Complete
                    </button>
                )}
            </div>
        </div>
    );
};

export default Task;
