import { RequestHandler } from "express";
import { taskLogic } from "../business-logic/task.business.logic";

export const taskController: {
  createTask: RequestHandler;
  getTasks: RequestHandler;
  getTaskById: RequestHandler;
  deleteTask: RequestHandler;
  updateTask: RequestHandler;
} = {
  async createTask(req, res, next) {
    try {
      const input = req.body;
      const response = await taskLogic.createTask({ input });
      res.json({
        success: true,
        message: "Task created successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async getTasks(req, res, next) {
    try {
      const response = await taskLogic.getTasks();
      res.json({
        success: true,
        message: "Tasks fetched successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async getTaskById(req, res, next) {
    try {
      const id = req.params.id;
      const response = await taskLogic.getTaskById({ id });
      res.json({
        success: true,
        message: "Task fetched successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async deleteTask(req, res, next) {
    try {
      const id = req.params.id;
      await taskLogic.deleteTask({ id });
      res.json({
        success: true,
        message: "Task deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  async updateTask(req, res, next) {
    try {
      const id = req.params.id;
      const input = req.body;
      const response = await taskLogic.updateTask({ id, input });
      res.json({
        success: true,
        message: "Task updated successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
};
