import httpStatus from "http-status";
import { TaskModel } from "../models/index.js";

export const addTask = async (body) => {
  try {
    const { title, description } = body;

    const response = await TaskModel.Task.create({
      title,
      description,
    });
    return {
      code: httpStatus.CREATED,
      success: true,
      message: "Task created",
      data: response,
    };
  } catch (error) {
    console.log("err at Task.service>>>", error);
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const response = await TaskModel.Task.find({});
    return {
      code: httpStatus.OK,
      success: true,
      data: response,
      count: response?.length,
    };
  } catch (error) {
    console.log("err at Task.service>>>", error);
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
      data: [],
      count: 0,
    };
  }
};
