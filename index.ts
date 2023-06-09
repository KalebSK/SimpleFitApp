import {load, Application} from "./utilities/deps.ts"
import router from "./routes.ts";
import { PrismaClient } from './generated/client/deno/edge.ts'
const env = await load();
const app = new Application();

export const prisma = new PrismaClient({
    datasources: { db: { url: env['DATABASE_URL'] }},
  });

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });

app.use(router.prefix('/api/').routes());
app.use(router.allowedMethods());

console.log(`Listening on port:${env['APP_PORT']}...`);

await app.listen(`${env['APP_HOST']}:${env['APP_PORT']}`);

export default app;
