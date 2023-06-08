import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
const PASSWORD_VALIDATOR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,32}$/;

export const signUpSchema = z.object({
    username: z.string().length(30),
    email: z.string().email(),
    password: z.string().regex(PASSWORD_VALIDATOR),
}).required();

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(PASSWORD_VALIDATOR),
}).required();

export const profilePicSchema = z.object({
    id: z.string().uuid(),
    url: z.string().url(),
}).required();