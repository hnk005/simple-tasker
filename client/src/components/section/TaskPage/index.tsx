import TaskProvider from "@/providers/TaskProvider"
import TaskList from "./TaskList"
import TaskFilter from "./TaskFilter";
import TaskSearch from "./TaskSearch";

const TaskPage = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <TaskProvider>
                <div className="flex max-lg:flex-col justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold">Task List</h2>
                    <div className="flex max-lg:flex-col max-lg:mt-5 row gap-5 ">
                        <TaskSearch />
                        <TaskFilter />
                    </div>
                </div>
                <TaskList />
            </TaskProvider>
        </div>
    )
}

export default TaskPage;