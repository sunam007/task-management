import httpStatus from "http-status";
import { UserModel } from "../models/index.js";

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
    console.log("err at User.service>>>", error);

    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error?.message,
    };
  }
};
