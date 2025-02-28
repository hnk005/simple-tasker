import { ReactElement, useContext } from "react";
import Task from "./Task";
import { TaskContext } from "@/providers/TaskProvider";


const TaskList = (): ReactElement => {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
