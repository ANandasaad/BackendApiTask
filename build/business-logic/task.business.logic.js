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
exports.taskLogic = void 0;
const config_1 = require("../config");
const http_errors_1 = require("http-errors");
exports.taskLogic = {
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield config_1.prisma.task.findMany();
                    if (!response)
                        throw new http_errors_1.NotFound("Tasks not found");
                    return resolve(response);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    getTaskById({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const isTaskExist = yield config_1.prisma.task.findUnique({
                        where: {
                            id,
                        },
                    });
                    if (!isTaskExist)
                        throw new http_errors_1.NotFound("Task not found");
                    return resolve(isTaskExist);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    createTask({ input }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { title, Description, dueDate, status } = input;
                    const dueDateISO = new Date(dueDate).toISOString();
                    const create = yield config_1.prisma.task.create({
                        data: {
                            title,
                            Description,
                            dueDate: dueDateISO,
                            status: status === null || status === void 0 ? void 0 : status.toLowerCase(),
                        },
                    });
                    return resolve(create);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    updateTask({ id, input, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                try {
                    const { title, Description, dueDate, status } = input;
                    const isTaskExist = yield config_1.prisma.task.findUnique({
                        where: {
                            id,
                        },
                    });
                    if (!isTaskExist)
                        throw new http_errors_1.NotFound("Task not found");
                    const update = yield config_1.prisma.task.update({
                        where: {
                            id,
                        },
                        data: {
                            title: title ? title : isTaskExist.title,
                            Description: Description ? Description : isTaskExist.Description,
                            dueDate: dueDate
                                ? new Date(dueDate).toISOString()
                                : isTaskExist.dueDate,
                            status: status
                                ? (_a = String(status)) === null || _a === void 0 ? void 0 : _a.toLowerCase()
                                : isTaskExist.status,
                        },
                    });
                    return resolve(update);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    deleteTask({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const isTaskExist = yield config_1.prisma.task.findUnique({
                        where: {
                            id,
                        },
                    });
                    if (!isTaskExist)
                        throw new http_errors_1.NotFound("Task not found");
                    const deleteTask = yield config_1.prisma.task.delete({
                        where: {
                            id,
                        },
                    });
                    return resolve(deleteTask);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
};
