import httpStatus from "http-status";
import { UserModel } from "../models/index.js";
import { getToken } from "../utils/auth.js";

export const registerUser = async (body) => {
  try {
    const { firstName, lastName, email, password } = body;

    const response = await UserModel.User.create({
      firstName,
      lastName,
      email,
      password,
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

export const loginUser = async (body) => {
  try {
    const { email, password } = body;

    const user = await UserModel.User.findOne({
      email,
      password,
    }).select("firstName lastName email");

    if (!user) {
      return {
        code: httpStatus.BAD_REQUEST,
        success: false,
        message: "invalid email or password",
        data: [],
      };
    }

    const token = getToken(user);

    delete user?.password;

    return {
      code: httpStatus.OK,
      success: true,
      token,
      data: user
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
    };
  }
};
