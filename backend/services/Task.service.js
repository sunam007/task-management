import httpStatus from "http-status";
import { TaskModel, UserModel } from "../models/index.js";

export const addTask = async (body) => {
  try {
    const { title, description, email } = body;

    const response = await TaskModel.Task.create({
      title,
      description,
      email,
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

export const getAllTasks = async (email, page, limit) => {
  try {
    const user = await UserModel.User.findOne({ email });

    if (!user) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "user not found",
        data: [],
        count: 0,
      };
    }

    //pagination

    let _page;
    let _limit;

    _page = page ? page : 1;
    _limit = limit ? limit : 10;

    const skip = (_page - 1) * _limit;

    const response = await TaskModel.Task.find({ email: email })
      .skip(skip)
      .limit(_limit);

    return {
      code: httpStatus.OK,
      success: true,
      data: response,
      count: response?.length,
      page: _page,
      limit: _limit,
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

export const updateTask = async (id, body) => {
  try {

    const response = await TaskModel.Task.findByIdAndUpdate(id, {
      status: body?.status,
    });

    if (!response) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "task not found",
      };
    }
    // if (response?.status) {
    //   return {
    //     code: httpStatus.BAD_REQUEST,
    //     success: false,
    //     message: "already completed",
    //   };
    // }
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
