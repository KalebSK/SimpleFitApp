import { z } from "./deps.ts"
const PASSWORD_VALIDATOR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,32}$/;

export const signUpSchema = z.object({
    body: z.object({
        username: z.string({required_error: 'Username is Required'}).length(30),
        email: z.string({required_error: 'Email is Required'}).email(),
        password: z.string({required_error: 'Password is Required'}).regex(PASSWORD_VALIDATOR),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string({required_error: 'Email is Required'}).email(),
        password: z.string({required_error: 'Password is Required'}).regex(PASSWORD_VALIDATOR),    
    }),
});
export const profilePicSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    })
}).required();

export const imageTypeSchema = z.string().includes("png" || "jpeg");


export type imageContentType = z.TypeOf<typeof imageTypeSchema>;
export type SignUpInput = z.TypeOf<typeof signUpSchema>["body"];
export type SignInInput = z.TypeOf<typeof loginSchema>["body"];
export type ProfilePicUpdateInput = z.TypeOf<typeof profilePicSchema>;