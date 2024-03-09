import { Prisma, STATUS } from "@prisma/client";
import { prisma } from "../config";
import { NotFound, Conflict } from "http-errors";
type TASK_TYPE = {
  input: Prisma.TaskCreateInput;
};

export const taskLogic = {
  async getTasks() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await prisma.task.findMany();
        if (!response) throw new NotFound("Tasks not found");
        return resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },
  async getTaskById({ id }: { id: string }) {
    return new Promise(async (resolve, reject) => {
      try {
        const isTaskExist = await prisma.task.findUnique({
          where: {
            id,
          },
        });
        if (!isTaskExist) throw new NotFound("Task not found");
        return resolve(isTaskExist);
      } catch (error) {
        reject(error);
      }
    });
  },
  async createTask({ input }: TASK_TYPE) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, Description, dueDate, status } = input;
        const dueDateISO = new Date(dueDate).toISOString();

        const create = await prisma.task.create({
          data: {
            title,
            Description,
            dueDate: dueDateISO,
            status: status?.toLowerCase() as STATUS,
          },
        });
        return resolve(create);
      } catch (error) {
        reject(error);
      }
    });
  },
  async updateTask({
    id,
    input,
  }: {
    id: string;
    input: Prisma.TaskUpdateInput;
  }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, Description, dueDate, status } = input;
        const isTaskExist = await prisma.task.findUnique({
          where: {
            id,
          },
        });
        if (!isTaskExist) throw new NotFound("Task not found");
        const update = await prisma.task.update({
          where: {
            id,
          },
          data: {
            title: title ? title : isTaskExist.title,
            Description: Description ? Description : isTaskExist.Description,
            dueDate: dueDate
              ? new Date(dueDate as string).toISOString()
              : isTaskExist.dueDate,
            status: status
              ? (String(status)?.toLowerCase() as STATUS)
              : isTaskExist.status,
          },
        });
        return resolve(update);
      } catch (error) {
        reject(error);
      }
    });
  },
  async deleteTask({ id }: { id: string }) {
    return new Promise(async (resolve, reject) => {
      try {
        const isTaskExist = await prisma.task.findUnique({
          where: {
            id,
          },
        });
        if (!isTaskExist) throw new NotFound("Task not found");
        const deleteTask = await prisma.task.delete({
          where: {
            id,
          },
        });
        return resolve(deleteTask);
      } catch (error) {
        reject(error);
      }
    });
  },
};
