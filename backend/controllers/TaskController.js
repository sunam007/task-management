import httpStatus from "http-status";
import { TaskService } from "../services/index.js";

export const addTask = async (req, res) => {
  const respone = await TaskService.addTask(req?.body);
  res.status(respone?.code).send({ data: respone });
};
export const getAllTasks = async (req, res) => {
  const respone = await TaskService.getAllTasks();
  res.status(respone?.code).send({ data: respone });
};
