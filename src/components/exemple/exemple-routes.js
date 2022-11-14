import Router from "@koa/router";
import * as ExempleController from "#components/exemple/exemple-controller.js";
const exemples = new Router();

exemples.get("/", ExempleController.index);

exemples.post("/add", ExempleController.create);

/* exemples.get("/:id", (ctx, next) => {
    const id = ctx.params.id;
    const todoId = todo.find((todo) => todo.id === Number(id));
    ctx.body = todoId;
});

exemples.delete("/delete/:id", (ctx, next) => {
    const id = ctx.params.id;
    const todoId = todo.find((todo) => todo.id === Number(id));
    const index = todo.indexOf(todoId);
    todo.splice(index, 1);
    ctx.body = todo;
});

exemples.put("/update/:id", (ctx) => {
    const id = ctx.params.id;
    const todoId = todo.find((todo) => todo.id === Number(id));
    const index = todo.indexOf(todoId);
    todo[index].title = ctx.request.body.title;
    ctx.body = todo;
}); */

export default exemples;