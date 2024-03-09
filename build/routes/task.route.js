"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../controllers/task.controller");
const router = express_1.default.Router();
router.post("/create", task_controller_1.taskController.createTask);
router.get("/get-all-tasks", task_controller_1.taskController.getTasks);
router.get("/get-task/:id", task_controller_1.taskController.getTaskById);
router.put("/update-task/:id", task_controller_1.taskController.updateTask);
router.delete("/delete-task/:id", task_controller_1.taskController.deleteTask);
exports.default = router;
