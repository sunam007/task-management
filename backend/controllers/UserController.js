import { UserService } from "../services/index.js";

export const userRegister = async (req, res) => {
  const respone = await UserService.registerUser(req?.body);
  res.status(respone?.code).send(respone);
};
export const userLogin = async (req, res) => {
  const respone = await UserService.loginUser(req?.body);
  res.status(respone?.code).cookie("token", respone?.token).send(respone);
};
