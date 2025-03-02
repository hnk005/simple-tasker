import { Router } from "express";
import taskController from "~/controllers/task.controllers";

const taskRouter = Router();

const { getTasks, addTask, updateTask, completeTask, deleteTask } = taskController;

taskRouter.get("/task/get", getTasks);
taskRouter.post("/task/add", addTask);
taskRouter.put("/task/update", updateTask);
taskRouter.put("/task/complete", completeTask);
taskRouter.delete("/task/delete", deleteTask);

export default taskRouter;
