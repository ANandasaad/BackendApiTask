import express from "express";
import { taskController } from "../controllers/task.controller";
const router = express.Router();
router.post("/create", taskController.createTask);
router.get("/get-all-tasks", taskController.getTasks);
router.get("/get-task/:id", taskController.getTaskById);
router.put("/update-task/:id", taskController.updateTask);
router.delete("/delete-task/:id", taskController.deleteTask);
export default router;
