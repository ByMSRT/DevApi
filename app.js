import "#config/database.js";
import Exemple from "#components/exemple/exemple-model.js";
import Koa from "koa";
import respond from "koa-respond";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import { API_V1_ROUTER } from "#routes/index.js";
import { API_V2_ROUTER } from "#routes/index.js";

const app = new Koa();

app.use(bodyParser())
    .use(API_V1_ROUTER.routes())
    .use(API_V2_ROUTER.routes())
    .use(respond())
    .use(API_V1_ROUTER.allowedMethods())
    .use(API_V2_ROUTER.allowedMethods());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});