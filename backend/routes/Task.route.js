import express from "express";
import { TaskController } from "../controllers/index.js";
import { validation } from "../middlewares/validate.js";
import { TaskValidation } from "../validation/index.js";
import { restrictToLoggedInUser } from "../middlewares/auth.js";

const router = express.Router();

router
  .route("/")
  .get(restrictToLoggedInUser,validation, TaskController.getAllTasks)
  .post(TaskValidation.addTask, validation, TaskController.addTask);

router
  .route("/:id")
  .put(TaskValidation.updateTask, validation, TaskController.updateTask)
  .delete(TaskValidation.deleteTask, validation, TaskController.deleteTask);

export default router;
