import { PriorityTask, StatusTask } from "./type";

export interface TaskInterface {
  title: string;
  description: string;
  status: StatusTask;
  priority: PriorityTask;
}
