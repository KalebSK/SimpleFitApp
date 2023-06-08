import {
    ClientPostgreSQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.10/mod.ts";

import { load } from "https://deno.land/std@0.190.0/dotenv/mod.ts";

const env = await load();

const client = new ClientPostgreSQL({
    database: env["DATABASE_NAME"],
    hostname: env["DATABASE_HOST"],
    port: Number(env["DATABASE_PORT"]),
    user: env["DATABASE_USER"],
    password: env["DATABASE_PASSWORD"],
});


/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default config;
