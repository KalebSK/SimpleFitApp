import { key } from "../utilities/util.ts";
import { create, bcrypt, RouterContext } from "../utilities/deps.ts"
import { SignUpInput, SignInInput } from "../utilities/schema.ts";
import { prisma } from "../index.ts";
import { Prisma } from "../generated/client/deno/edge.js";
import { ProcessFormData } from "../formDataProcessor.ts";
import { verify } from "../utilities/deps.ts";
import { getNumericDate ,ensureDir, move, Payload } from "../utilities/deps.ts";
export const signUp = async ({request, response}: RouterContext<string>) : Promise<void> => {
    try {
        // request data
        const data: SignUpInput = await request.body({type: 'json'}).value;
        // generate new uuid
        const userId: string = crypto.randomUUID();
        const salt = await bcrypt.genSalt();
        const pHash: string = await bcrypt.hash(data.password, salt);
        // query db
        const _user = await prisma.users.create({
            data: {id: userId, email: data.email, username: data.username, password: pHash}
        })
        response.status = 201;
        response.body = {
            message: "User Created.",
        }
        return;

    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            if(error.code === "P2002") {
                response.status = 409;
                response.body = {
                    message: `User with email already exists.`
                };
                return;
            }
        }
        response.status = 500;
        response.body = {
            message: 'server error.'
        }
    }
}

export const signIn = async (ctx: RouterContext<string>) : Promise<void> => {
    try {
        const request = ctx.request;
        const response = ctx.response;

        const data: SignInInput = await request.body().value;
        const user = await prisma.users.findFirst({where:{email: data.email}});
        if(!user) {
            response.status = 404;
            response.body = {
                message: 'user with email does not exist.'
            }
            return;
        }
        const payload = {
            userId: user.id,
            email: user.email,
            exp: getNumericDate(15*60)
        }
        // generate access token
        const accessToken: string = await create({ alg: "HS512", typ: "JWT" }, payload, key);
        const refPayload = {
            userId: user.id,
            email: user.email,
            exp: getNumericDate(60*60*365)
        }
        // generate refresh token
        const refreshToken: string = await create({alg: "HS512", typ: "JWT"},refPayload, key);
        if(accessToken && refreshToken) {
            await ctx.cookies.set("refreshToken", refreshToken);
            const id: string = crypto.randomUUID();

            const _rToken = await prisma.refreshTokens.create({
                data: {id: id, token: refreshToken, userId: user.id}
            });
            response.status = 200;
            response.body = {
                userId: user.id,
                email: user.email,
                token: accessToken
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.'
        }

    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: error.code,
                message: error.message
            }
        }
        ctx.response.status = 500;
        ctx.response.body = {
            message: 'server error.'
        }
    }
    
}

export const refreshAuth = async(ctx: RouterContext<string>) : Promise<void> => {
    try {
        const refreshToken = await ctx.cookies.get('refreshToken');
        if(!refreshToken){
            ctx.response.status = 406;
            ctx.response.body = {
                message: 'Unauthorized Request.'
            }   
            return; 
        }
        const _refreshPayload: Payload = await verify(refreshToken, key);
        
        const data = await ctx.request.body().value;
        const payload = {
            userId: data.id,
            email: data.email,
            exp: getNumericDate(15*60)
        }
        const refreshTkn = await prisma.refreshTokens.findFirst({where: {userId: data.id}});
        if(!refreshTkn || refreshTkn.token !== refreshToken) {
            ctx.response.status = 406;
            ctx.response.body = {
                message: 'Unauthorized Request.'
            }
            return;
        }
        // sign a new Access Token
        const accessToken: string = await create({ alg: "HS512", typ: "JWT" }, payload, key);
        if(!accessToken) {
            ctx.response.status = 500;
            ctx.response.body = {
                message: 'server error.'
            }
            return;
        }
        ctx.response.status = 200;
        ctx.response.body = {
            token: accessToken
        }
    } catch(error) {
        ctx.response.status = 406;
        ctx.response.body = {
            message: 'Unauthorized Request.',
            error: error.message
        }
    }
}

export const updateProfilePic = async (ctx: RouterContext<string>) : Promise<void> => {
    const request = ctx.request;
    const response = ctx.response;
    try{
        const userId = request.url.searchParams.get('id');
        if(userId === null) {
            response.status = 400;
            response.body = {
                message: 'no user.'
            }
            return;
        }

        const data = await request.body({type: 'form-data'}).value.read();
        const files = data.files;

        if(!files) {
             response.status = 400;
             response.body = {
                 message: "file not found."
             }
             return;
        }
        
        const result = ProcessFormData(files[0]);
        if(result.status === 'failed.') {
             response.status = 400;
             response.body = {
                 message: "upload failed."
             }
             return;
         }
         const url = './assets/users/' + userId + '/'
         const path = result.message;
         await ensureDir(url);
         const imgLoc = url +  + 'ppic.' + result.type;
         await move(path, imgLoc,{overwrite: true});
         await prisma.users.update({where:{id: userId}, data:{profile_pic_uri: imgLoc}});
         response.status = 201;
         response.body = {
            message: 'profile picture updated.'
         }

    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 400;
            response.body = {
                status: error.code,
                message: error.message
            }
        }

        response.status = 400;
        response.body = {
            message: 'upload failed.',
            error: error.message
        }
    }

}