import express from "express";
import TaskRoute from "./Task.route.js";
import UserRoute from "./User.route.js";

const router = express.Router();

const routes = [
  {
    path: "/tasks",
    route: TaskRoute,
  },
  {
    path: "/users",
    route: UserRoute,
  },
];

routes.forEach((current, i) => {
  router.use(current.path, current.route);
});

export default router;
