"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const task_business_logic_1 = require("../business-logic/task.business.logic");
exports.taskController = {
    createTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const response = yield task_business_logic_1.taskLogic.createTask({ input });
                res.json({
                    success: true,
                    message: "Task created successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    getTasks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield task_business_logic_1.taskLogic.getTasks();
                res.json({
                    success: true,
                    message: "Tasks fetched successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    getTaskById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield task_business_logic_1.taskLogic.getTaskById({ id });
                res.json({
                    success: true,
                    message: "Task fetched successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    deleteTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield task_business_logic_1.taskLogic.deleteTask({ id });
                res.json({
                    success: true,
                    message: "Task deleted successfully",
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    updateTask(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const input = req.body;
                const response = yield task_business_logic_1.taskLogic.updateTask({ id, input });
                res.json({
                    success: true,
                    message: "Task updated successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
};
