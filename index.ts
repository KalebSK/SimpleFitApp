import {load, Application} from "./utilities/deps.ts";
import router from "./routes.ts";
import { PrismaClient } from './generated/client/deno/edge.ts';
import { bold, cyan, magenta, red, yellow } from "https://deno.land/std@0.191.0/fmt/colors.ts";
const env = await load();
const app = new Application();

export const prisma = new PrismaClient({
    datasources: { db: { url: env['DATABASE_URL'] }},
  });

app.use(router.prefix('/api/').routes());
app.use(router.allowedMethods());

app.addEventListener("error", (error) => {
  console.log(magenta(String(error.timeStamp)))
  console.log(cyan("Server Error: "), red(error.message))
})

app.addEventListener("listen", ({serverType, port, hostname}) => 
  {console.log(bold("Start listening on ") + yellow(`${hostname}:${port}`),  );
    console.log(bold("  using HTTP server: " + yellow(serverType)));});

const certfile: string = Deno.env.get("HOME") + env['CERTFILE'];
const keyfile: string = Deno.env.get("HOME") + env['KEYFILE'];
await app.listen({secure: true,port: Number(env['APP_PORT']),
                 certFile: certfile, keyFile: keyfile, hostname: env['APP_HOST'], alpnProtocols: ["h2", "http/1.1"]});

export default app;
