import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  markAllCompleted,
  markAllIncompleted,
} from "../controller/todo.controller.js";

const router = express.Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);
router.route("/:id/toggle").patch(toggleTodo);
router.route("/markAllCompleted").patch(markAllCompleted);
router.route("/markAllIncompleted").patch(markAllIncompleted);

export default router;
