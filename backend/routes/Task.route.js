import express from "express";
import { TaskController } from "../controllers/index.js";
import { validation } from "../middlewares/validate.js";
import { TaskValidation } from "../validation/index.js";
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
