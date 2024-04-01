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

export const updateTask = [
  param("id")
    .isString()
    .withMessage("must be a string")
    .isMongoId()
    .withMessage("must be a valid mongo id"),
];
export const deleteTask = [
  param("id")
    .isString()
    .withMessage("must be a string")
    .isMongoId()
    .withMessage("must be a valid mongo id"),
];

// deleteTask
