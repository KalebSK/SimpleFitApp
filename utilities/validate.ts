// deno-lint-ignore-file no-explicit-any
import { RouterContext, fromZodError, ValidationError, isValidationErrorLike, z, helpers } from "./deps.ts";

export const validate = ( schema: z.AnyZodObject ) => 
    async (ctx: RouterContext<string>, next: () => any): Promise<void> => {
        try{
            schema.parse({
                params: ctx.params,
                query: helpers.getQuery
            })
            await next();
        } catch(error) {
            if(error instanceof z.ZodError) {
                const readableError: ValidationError = fromZodError(error);
                if(isValidationErrorLike(readableError)) {
                    ctx.response.status = 400;
                    ctx.response.body = {
                        message: `Data Error: ${readableError}`
                    }
                    return;
                }
            }
            ctx.response.status = 500;
            ctx.response.body = {
                message: 'Server Error.'
            }  
        }
    }
