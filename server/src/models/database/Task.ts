import mongoose, { Schema } from "mongoose";
import { TaskInterface } from "~/contants/interface";

const TaskSchema: Schema<TaskInterface> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    status: { type: String, enum: ["Pending", "Complete"], default: "Pending" },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model<TaskInterface>("Task", TaskSchema);

export default Task;
