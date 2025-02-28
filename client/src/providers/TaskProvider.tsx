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
    }
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
    handleComplete: (id: number) => void;
    handleFilter: (filter: { priority: string, status: string }) => void;
    handleSearch: (search: string) => void;
}


export const TaskContext = createContext({} as TaskPropsProvider);

const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskInterface[]>(listTask);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState({
        priority: "",
        status: "",
    })
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleEdit = (id: number) => {

    };

    const handleDelete = (id: number) => {

    };

    const handleComplete = (id: number) => {

    };

    const handleFilter = (filter: { priority: string, status: string }) => {
        setFilter(filter);
    };

    const handleSearch = (search: string) => {
        setSearch(search);
    }

    useEffect(() => {
        console.log("search:", search)
        console.log("status:", filter.status)
        console.log("priority", filter.priority)
    }, [search, filter.status, filter.priority])


    return (
        <TaskContext.Provider value={{ tasks, filter, search, handleEdit, handleDelete, handleComplete, handleFilter, handleSearch }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;