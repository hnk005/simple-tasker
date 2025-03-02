import api from "@/api";
import { TaskInterface } from "@/core/interface";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface TaskPropsProvider {
  tasks: TaskInterface[];
  search: string;
  filter: {
    priority: string;
    status: string;
  };
  editTaskId: number | null;
  deleteTaskId: number | null;
  handleEdit: (task: TaskInterface) => void;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
  handleFilter: (filter: { priority: string; status: string }) => void;
  handleSearch: (search: string) => void;
  openEdit: (id: number) => void;
  closeEdit: () => void;
  openDelete: (id: number) => void;
  closeDelete: () => void;
}

export const TaskContext = createContext({} as TaskPropsProvider);

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
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

  const handleEdit = async (task: TaskInterface) => {
    setLoading(true);
    await toast.promise(axios.put(api.updateTask, task), {
      loading: "Update...",
      success: <b>Update task complete!</b>,
      error: <b>Update task fail.</b>,
    });
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    await toast.promise(axios.delete(api.deleteTask, { params: { id } }), {
      loading: "Delete...",
      success: <b>Delete task complete!</b>,
      error: <b>Delete task fail.</b>,
    });
    setLoading(false);
  };

  const handleComplete = async (id: number) => {
    setLoading(true);
    await toast.promise(axios.put(api.completeTask, { id }), {
      loading: "Complete...",
      success: <b>Complete task complete!</b>,
      error: <b>Complete task fail.</b>,
    });
    setLoading(false);
  };

  const handleFilter = (filter: { priority: string; status: string }) => {
    setFilter(filter);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    if (loading) return;
    const getTasks = async () => {
      const { status, priority } = filter;
      const params: any = {};
      if (search) {
        params.search = search;
      }
      if (status) {
        params.status = status;
      }
      if (priority) {
        params.priority = priority;
      }
      const res = await axios.get(api.getTask, { params });
      if (res.status == 200) {
        return res.data;
      }

      throw res.data;
    };

    getTasks()
      .then((data: any) => {
        setTasks(
          data.map((d: any) => ({
            id: d._id,
            title: d.title,
            description: d.description,
            status: d.status,
            priority: d.priority,
          }))
        );
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  }, [search, filter, loading]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        search,
        editTaskId,
        deleteTaskId,
        handleEdit,
        handleDelete,
        handleComplete,
        handleFilter,
        handleSearch,
        openEdit,
        closeEdit,
        openDelete,
        closeDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
