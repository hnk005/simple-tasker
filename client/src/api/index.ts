import { SERVER } from "@/core/enum";

const apiUrl = "api/task";

const api = {
  getTask: `${SERVER}/${apiUrl}/get`,
  addTask: `${SERVER}/${apiUrl}/add`,
  updateTask: `${SERVER}/${apiUrl}/update`,
  completeTask: `${SERVER}/${apiUrl}/complete`,
  deleteTask: `${SERVER}/${apiUrl}/delete`,
};

export default api;
