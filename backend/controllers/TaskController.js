import httpStatus from "http-status";
import { TaskService } from "../services/index.js";

export const addTask = async (req, res) => {
  const respone = await TaskService.addTask(req?.body);
  res.status(respone?.code).send(respone);
};
export const getAllTasks = async (req, res) => {
  const respone = await TaskService.getAllTasks();
  res.status(respone?.code).send(respone);
};

/*
{
  "data": {
    "code": 201,
    "success": true,
    "message": "Task created",
    "data": {
      "title": "test title - 3",
      "description": "test desc - 3",
      "status": false,
      "_id": "660b035f43a80f60cfe99081",
      "createdAt": "2024-04-01T18:56:31.056Z",
      "updatedAt": "2024-04-01T18:56:31.056Z",
      "__v": 0
    }
  }
}
*/
