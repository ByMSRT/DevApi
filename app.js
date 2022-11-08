import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

const todo = [{
        id: 1,
        title: "Acheter des patates",
    },
    {
        id: 2,
        title: "Acheter des tomates",
    },
    {
        id: 3,
        title: "Acheter des carottes",
    },
];

router.get("/", (ctx, next) => {
    ctx.body = "Hello World";
});

router.get("/todos", (ctx, next) => {
    ctx.body = todo;
    console.log(todo.map((item) => item.id));
});

router.get("/todos/:id", (ctx, next) => {
    const id = ctx.params.id;
    const todoId = todo.find((todo) => todo.id === Number(id));
    ctx.body = todoId;
});

router.post("/todos/add", (ctx, next) => {
    const newTodo = {
        id: todo.length + 1,
        title: ctx.request.body.title,
    };
    todo.push(newTodo);
    ctx.body = newTodo;
});

router.delete("/todos/delete/:id", (ctx, next) => {
    const id = ctx.params.id;
    const todoId = todo.find((todo) => todo.id === Number(id));
    const index = todo.indexOf(todoId);
    todo.splice(index, 1);
    ctx.body = todo;
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});