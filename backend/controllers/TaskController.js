import httpStatus from "http-status";
import { TaskService } from "../services/index.js";
import { getUserFromToken } from "../utils/auth.js";

export const addTask = async (req, res) => {
  const respone = await TaskService.addTask(req?.body);
  res.status(respone?.code).send(respone);
};
export const getAllTasks = async (req, res) => {
  try {
    // get token from headers
    const token = req?.headers["x-access-token"];

    const { page, limit } = req?.query;

    let user;

    if (token !== undefined) {
      user = getUserFromToken(token);
    } else {
      res.status(httpStatus[400]).send("please login first");
    }

    const userEmail = user?.email;

    const respone = await TaskService.getAllTasks(userEmail, +page, +limit);

    res.status(respone?.code).send(respone);
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
      data: [],
      count: 0,
    };
  }
};

export const updateTask = async (req, res) => {
  const id = req?.params?.id;

  const body = req?.body;

  const respone = await TaskService.updateTask(id, body);
  res.status(respone?.code).send(respone);
};
export const deleteTask = async (req, res) => {
  const id = req?.params?.id;

  const respone = await TaskService.deleteTask(id);
  res.status(respone?.code).send(respone);
};
