import Router from "@koa/router";
import * as TodoController from "#components/task/todo-controller.js";

const todos = new Router();

todos.get("/", TodoController.readAll);

todos.post("/", TodoController.create);

todos.get("/:id", TodoController.findById);

todos.put("/:id", TodoController.update);

todos.delete("/:id", TodoController.deleteTask);

export default todos;