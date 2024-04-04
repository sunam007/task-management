import httpStatus from "http-status";
import { getUserFromToken } from "../utils/auth.js";

export const restrictToLoggedInUser = async (req, res, next) => {
  try {
    const token = req?.headers["x-access-token"]

    // const token = req?.token

    clg("token received " , token);

    let user;

    if (token !== undefined) {
      user = getUserFromToken(token);
    } else {
      res.status(httpStatus[400]).send("please login first");
    }

    if (!user) {
      return {
        code: httpStatus.BAD_REQUEST,
        success: false,
        message: "user not found",
      };
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(403).send("please login first");
  }
};
