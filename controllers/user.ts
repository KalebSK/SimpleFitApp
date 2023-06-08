import { key } from "../utilities/util.ts";
import {signUpSchema, loginSchema, profilePicSchema } from "../utilities/schema.ts";
import { create, Context, fromZodError, isValidationErrorLike, ValidationError, bcrypt, helpers } from "../utilities/deps.ts"


type SignUpData = {
    username: string,
    password: string,
    email: string,
}

type LoginData = {
    email: string,
    password: string
}

type ProfilePicUpdateData = {
    id: string,
    picUrl: string,
}

export const SignUp = async ({request, response}: Context) => {

    try {
        const data: SignUpData = await (request.body()).value;
        const result = signUpSchema.safeParse(data);
        // Validate sign up data
        if(!result.success) {
            const validationError: ValidationError = fromZodError(result.error);
            if(isValidationErrorLike(validationError)) {
                response.status = 400
                response.body = {
                    message: `invalid sign up data: ${validationError.message}`,
                }
                return;
            } 
            response.status = 500;
            response.body = {
                message: `server error.`
            }
            return;
        }

        // generate new user ID
        const id = crypto.randomUUID();

        // make sure provided email is not registered
        const u = await Users.where('email', data.email).get()
        if(!u) {

            // generate password hash
            const salt = await bcrypt.genSalt();
            const pHash = await bcrypt.hash(data.password, salt);

            // create user in db
            await Users.create({
                id: id,
                email: data.email,
                username: data.username,
                passwordhash: pHash,
            });

            response.status=201;
            response.body = {
                message: `User created ${id} ${data.username}`
            }
            return;
        }

        // user already exists
        response.status = 400;
        response.body = {
            message: `User with email: ${data.email} already exists.`
        } 
        
    } catch(error) {
        response.status = 500;
        response.body = {
            message: `server error: ${error}`
        }
        throw error;
    }
}

export const SignIn = async ({request, response}: Context) => {
    try {
        const data: LoginData = await (request.body()).value;
        const result = loginSchema.safeParse(data);

        if(!result.success) {
            const validationError: ValidationError = fromZodError(result.error);
            if(isValidationErrorLike(validationError)) {
                response.status = 400
                response.body = {
                    message: `invalid login data: ${validationError.message}`,
                }
                return;
            } 
            response.status = 500;
            response.body = {
                message: `server error.`
            }
            return;
        }

        // get password hash
        const user = (await Users.where('email', data.email).select('passwordhash', 'id', 'username').find(1));
        if(!user) {
            response.status = 400;
            response.body = {
                message: `Invalid email.`,
            }
            return;
        }

        const passwordhash = user.passwordhash;
        const id = user.id;
        const username = user.username;

        // compare password
        const confirmPass = await bcrypt.compare(data.password, passwordhash!.toString());

        if(!confirmPass) {
            response.status = 404;
            response.body = {
                message: `Invalid  password.`,
            }
            return;
        }
       
        // Password is Invalid Authenticate User
        const payload = {
            id: id,
            name: username,
        }

        const jwt =  await create({ alg: "HS512", typ: "JWT" }, { payload }, key);

        if(jwt) {
            response.status = 200;
            response.body = {
                userId: id,
                username: username,
                token: jwt
            }
            return;
        }

        response.status = 500;
        response.body = {
            message: 'server error.'
        }

    } catch(error) {
        response.status = 500;
        response.body = {
            message: 'server error.'
        }
        throw error
    }

}

export const UpdateProfilePic = async (ctx: Context) => {
    const response = ctx.response;
    try {
        const data = helpers.getQuery(ctx);
        const result = profilePicSchema.safeParse(data);

        if(!result.success) {
            const validationError: ValidationError = fromZodError(result.error);
            if(isValidationErrorLike(validationError)) {
                response.status = 400
                response.body = {
                    message: `invalid profile pic data: ${validationError.message}`,
                }
                return;
            } 
            response.status = 500;
            response.body = {
                message: `server error.`
            }
            return;
        }
        // check that user is in the db
        const user = await Users.where('id', data.id).find(1);
    
        if(!user) {
            response.status = 404;
            response.body = {
                message: `User ${user} does not exist.`
            }
            return;
        }
    
        // update the profile pic url
        Users.where('id', data.id).update('profile_pic_uri', data.url); 

        response.status = 200;
        response.body = {
            message: `profile pic updated`,
            url: data.url
        }   

    } catch(error) {
        response.status = 500;
        response.body = { 
            message: `Server error.`
        }
        throw error;
    }
}