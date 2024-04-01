import { body, param } from "express-validator";

export const addTask = [
  body("title")
    .isString()
    .withMessage("this field must be a string")
    .notEmpty()
    .withMessage("this field is required"),
  body("description")
    .isString()
    .withMessage("this field must be a string")
    .notEmpty()
    .withMessage("this field is required"),
];
