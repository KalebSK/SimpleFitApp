import {load, Application} from "./utilities/deps.ts"
import router from "./routes.ts";

const env = await load();
const app = new Application();

app.use(router.routes());

console.log(`Listening on port:${env['APP_HOST']}...`);

await app.listen(`${env['APP_HOST']}:${env['APP_PORT']}`);

export default app;
