import { TaskController } from "../controllers/index.js";
import { TaskValidation } from "../validation/index.js";
import { validation } from "../middlewares/validate.js";
import { getAllTasks } from "../controllers/TaskController.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(TaskController.getAllTasks)
  .post(TaskValidation.addTask, validation, TaskController.addTask);

router
  .route("/:id")
  .put((req, res) => {})
  .delete((req, res) => {});

export default router;
