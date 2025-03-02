import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "~/contants/httpStatus";
import { TaskInterface } from "~/contants/interface";
import Task from "~/models/database/Task";

const taskController = {
  getTasks: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { search, status, priority } = req.query as { search?: string; status?: string; priority?: string };

      const query: any = {};

      if (search) {
        query.title = { $regex: search, $options: "i" };
      }

      if (status) {
        query.status = status;
      }

      if (priority) {
        query.priority = priority;
      }

      const tasks = await Task.find(query);

      res.status(HTTP_STATUS.OK).json(tasks);
      return;
    } catch (error) {
      next(error);
    }
  },

  addTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, description, priority } = req.body as TaskInterface;

      if (!title || !priority) {
        res.status(HTTP_STATUS.BAD_REQUEST).json();
        return;
      }

      await Task.create({ title, description, status: "Pending", priority });
      res.status(HTTP_STATUS.CREATED).json({ message: "add task complete" });
    } catch (error) {
      next(error);
    }
  },

  updateTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, title, description, status, priority } = req.body;

      if (!id || !title || !status) {
        res.status(HTTP_STATUS.BAD_REQUEST).json();
        return;
      }

      await Task.findOneAndUpdate({ _id: id }, { title, description, status, priority });
      res.status(HTTP_STATUS.OK).json({ message: "update task complete" });
    } catch (error) {
      next(error);
    }
  },

  completeTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(HTTP_STATUS.BAD_REQUEST).json();
        return;
      }

      await Task.findByIdAndUpdate(id, { status: "Complete" });
      res.status(HTTP_STATUS.OK).json({ message: "update task complete" });
    } catch (error) {
      next(error);
    }
  },

  deleteTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.query;
      if (!id) {
        res.status(HTTP_STATUS.BAD_REQUEST).json();
      }

      const del = await Task.deleteOne({ _id: id });
      if (del.deletedCount) {
        res.status(HTTP_STATUS.OK).json({ message: "delete task complete" });
      } else {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "delete task fail" });
      }
    } catch (error) {
      next(error);
    }
  }
};

export default taskController;
