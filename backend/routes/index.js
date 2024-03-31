import express from "express";

const router = express.Router();
import TaskRoute from "./Task.route.js";

const routes = [
  {
    path: "/task",
    route: TaskRoute,
  },
];

routes.forEach((current, i) => {
  router.use(current.path, current.route);
});

export default router;
