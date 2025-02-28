import { PriorityTask, StatusTask } from "./type";

export interface TaskInterface {
    id: number;
    title: string;
    description: string;
    dueDate?: string;
    status: StatusTask;
    priority: PriorityTask
}