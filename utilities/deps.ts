import { load } from "https://deno.land/std@0.190.0/dotenv/mod.ts";
export * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
export { create, verify, getNumericDate } from "https://deno.land/x/djwt@v2.8/mod.ts";
export { helpers } from "https://deno.land/x/oak@v12.5.0/mod.ts";
export type { RouterContext, FormDataFile } from "https://deno.land/x/oak@v12.5.0/mod.ts";
export { ValidationError, fromZodError, isValidationErrorLike } from 'npm:zod-validation-error';
export { Cookies, Application, testing } from "https://deno.land/x/oak@v12.5.0/mod.ts";
export type { Middleware } from "https://deno.land/x/oak@v12.5.0/mod.ts";
export { load } from "https://deno.land/std@0.190.0/dotenv/mod.ts";
export { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
export { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
export type {Payload} from "https://deno.land/x/djwt@v2.8/mod.ts";
export { move, ensureDir } from "https://deno.land/std@0.191.0/fs/mod.ts";
export { assert, assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";

const env = await load();
export const key = env['KEY'];