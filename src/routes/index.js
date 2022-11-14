import Router from "@koa/router";
import exempleRoutes from "#components/exemple/exemple-routes.js";
import todosRoutes from "#components/task/todo-router.js";

const API_V1_ROUTER = new Router({ prefix: "/api/v1" });

API_V1_ROUTER.use(
    "/exemples",
    exempleRoutes.routes(),
    exempleRoutes.allowedMethods()
);

export { API_V1_ROUTER };

const API_V2_ROUTER = new Router({ prefix: "/api/v2" });

API_V2_ROUTER.use("/todos", todosRoutes.routes(), todosRoutes.allowedMethods());

export { API_V2_ROUTER };