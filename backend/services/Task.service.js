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
      message: "successfully created",
      data: response,
    };
  } catch (error) {
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
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
      data: [],
      count: 0,
    };
  }
};

export const updateTask = async (id) => {
  try {
    const response = await TaskModel.Task.findByIdAndUpdate(id, {
      $set: {
        status: true,
      },
    });

    if (!response) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "not found",
      };
    }
    if (response?.status) {
      return {
        code: httpStatus.BAD_REQUEST,
        success: false,
        message: "already completed",
      };
    }
    return {
      code: httpStatus.OK,
      success: true,
      data: response,
      count: response?.length,
    };
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

export const deleteTask = async (id) => {
  try {
    const response = await TaskModel.Task.findByIdAndDelete(id);

    if (!response) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "not found",
      };
    }

    return {
      code: httpStatus.OK,
      success: true,
      data: response,
      message: "successfully deleted",
    };
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
