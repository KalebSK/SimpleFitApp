import { key } from "../utilities/util.ts";
import { create, bcrypt, RouterContext } from "../utilities/deps.ts"
import { SignUpInput, SignInInput } from "../utilities/schema.ts";
import { prisma } from "../index.ts";
import { Prisma } from "../generated/client/deno/edge.js";
import { ProcessFormData } from "../formDataProcessor.ts";

import { move, ensureDir } from "../utilities/deps.ts";

export const SignUp = async ({request, response}: RouterContext<string>) => {
    try {
        // request data
        const data: SignUpInput = await request.body().value;
        // generate new uuid
        const userId: string = crypto.randomUUID();
        const salt = await bcrypt.genSalt();
        const pHash: string = await bcrypt.hash(data.password, salt);
        // query db
        const user = await prisma.users.create({
            data: {id: userId, email: data.email, username: data.username, password: pHash}
        })

        response.status = 201;
        response.body = {
            message: "User Created.",
            user
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

export const SignIn = async ({request, response}: RouterContext<string>) => {
    try {
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
            email: user.email
        }
        // generate token
        const jwt: string = await create({ alg: "HS512", typ: "JWT" }, payload, key);

        if(jwt) {
            response.status = 200;
            response.body = {
                userId: user.id,
                email: user.email,
                token: jwt,
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.'
        }

    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 400;
            response.body = {
                status: error.code,
                message: error.message
            }
        }
        response.status = 500;
        response.body = {
            message: 'server error.'
        }
    }
    
}

export const UpdateProfilePic = async ({params, request, response}: RouterContext<string>) => {
    try{
        const userId: string = params.id;
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

         const url = './assets/users/' + userId + '/' + 'ppic';
         const path = result.message;
         await ensureDir(url);
         await move(path, url,{overwrite: true});
         prisma.users.update({where:{id: userId}, data:{profile_pic_uri: url}});

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
            error: error
        }
    }

}