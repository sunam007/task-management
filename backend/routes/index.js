import TaskRoute from "./Task.route.js";
import express from "express";
const router = express.Router();

const routes = [
  {
    path: "/tasks",
    route: TaskRoute,
  },
];

routes.forEach((current, i) => {
  router.use(current.path, current.route);
});

export default router;
