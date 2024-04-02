import { UserService } from "../services/index.js";

export const userRegister = async (req, res) => {
  const respone = await UserService.registerUser(req?.body);
  res.status(respone?.code).send(respone);
};
// export const getAllTasks = async (req, res) => {
//   const respone = await TaskService.getAllTasks();
//   res.status(respone?.code).send(respone);
// };

// export const updateTask = async (req, res) => {
//   const id = req?.params?.id;

//   const respone = await TaskService.updateTask(id);
//   res.status(respone?.code).send(respone);
// };
// export const deleteTask = async (req, res) => {
//   const id = req?.params?.id;

//   const respone = await TaskService.deleteTask(id);
//   res.status(respone?.code).send(respone);
// };
