import DialogCommon from "@/components/common/DialogCommon";
import { TaskInterface } from "@/core/interface";
import { listTask } from "@/data/task";
import { Dialog } from "@headlessui/react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TaskPropsProvider {
    tasks: TaskInterface[],
    search: string,
    filter: {
        priority: string,
        status: string,
    },
    editTaskId: number | null,
    deleteTaskId: number | null,
    handleEdit: (task: TaskInterface) => void;
    handleDelete: (id: number) => void;
    handleComplete: (id: number) => void;
    handleFilter: (filter: { priority: string, status: string }) => void;
    handleSearch: (search: string) => void;
    openEdit: (id: number) => void;
    closeEdit: () => void;
    openDelete: (id: number) => void;
    closeDelete: () => void;
}

export const TaskContext = createContext({} as TaskPropsProvider);

const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskInterface[]>(listTask);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState({
        priority: "",
        status: "",
    });
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const openEdit = (id: number) => {
        setEditTaskId(id);
    };

    const closeEdit = () => {
        setEditTaskId(null);
    };

    const openDelete = (id: number) => {
        setDeleteTaskId(id);
    };

    const closeDelete = () => {
        setDeleteTaskId(null);
    };

    const handleEdit = (task: TaskInterface) => {
        setTasks(tasks.map(t => t.id === task.id ? task : t));
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const handleComplete = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, status: "Complete" } : t));
    };

    const handleFilter = (filter: { priority: string, status: string }) => {
        setFilter(filter);
    };

    const handleSearch = (search: string) => {
        setSearch(search);
    };

    useEffect(() => {
        console.log("search:", search);
        console.log("status:", filter.status);
        console.log("priority", filter.priority);
    }, [search, filter.status, filter.priority]);

    return (
        <TaskContext.Provider
            value={{
                tasks, filter, search,
                editTaskId, deleteTaskId,
                handleEdit, handleDelete,
                handleComplete, handleFilter, handleSearch,
                openEdit, closeEdit, openDelete, closeDelete
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;