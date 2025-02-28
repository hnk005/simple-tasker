import { TaskInterface } from "@/core/interface";

export const listTask: TaskInterface[] = [
    { id: 1, title: "Finish project proposal", description: "Submit project proposal.", dueDate: "2025-03-25", priority: "Low", status: "Complete" },
    { id: 2, title: "Revise quarterly plan", description: "Update quarterly plan.", dueDate: "", priority: "High", status: "Pedding" },
    { id: 3, title: "Submit budget report", description: "Send budget report.", dueDate: "2025-03-02", priority: "Medium", status: "Complete" },
    { id: 4, title: "Plan team meeting", description: "Organize meeting agenda.", dueDate: "2025-03-28", priority: "Low", status: "Expired" },
];