import { verify } from "../utilities/deps.ts";
import { key } from "../utilities/util.ts";
import { RouterContext } from "../utilities/deps.ts";

// deno-lint-ignore no-explicit-any
export const verifyAuth = async (ctx: RouterContext<string>, next:() => any) : Promise<void> => {
    try {
        const headers = ctx.request.headers;
        const accessToken = headers.get('Authorization');
        if(!accessToken) {
            ctx.response.status = 406;
            ctx.response.body = {
                message: 'Unauthorized Request.'
            }
            return;
        }
        const accessTokenJwt = accessToken.split(' ')[1];
        if(!accessTokenJwt) {
            ctx.response.status = 406;
            ctx.response.body = {
                message: 'Unauthorized Request.'
            }
            return;
        }
        const payload = await verify(accessTokenJwt, key);
        if(!payload) {
            ctx.response.status = 406;
            ctx.response.body = {
                message: 'invalid access token.'
            }
            return;
        }
        await next();
    } catch(error) {
        ctx.response.status = 500;
        ctx.response.body = {
            message: 'server error.',
            error: error.message
        }
    }
}