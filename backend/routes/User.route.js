import express from "express";
import { UserController } from "../controllers/index.js";
import { validation } from "../middlewares/validate.js";
import { TaskValidation, UserValidation } from "../validation/index.js";
const router = express.Router();

router
  .route("/register")
  .post(UserValidation.userRegister, validation, UserController.userRegister);

// router
//   .route("/:id")
//   .delete(TaskValidation.deleteTask, validation, TaskController.deleteTask);

export default router;
