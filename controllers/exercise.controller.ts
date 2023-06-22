import { Request, Response } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { RouterContext } from "../utilities/deps.ts";
import { CreateExerciseInput, AddUserExerciseInput, GetExerciseByIdInput, GetUserExercisesInput } from "../utilities/schema.ts";
import { Exercises, Users_Exercises } from "../generated/client/deno/index.d.ts";
import { prisma } from "../index.ts";
import { Prisma } from "../generated/client/deno/edge.js";

export const createExercise = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const id: string = crypto.randomUUID();
        const data: CreateExerciseInput = await request.body({type: 'json'}).value;
        const exercise: Exercises = await prisma.exercises.create({
            data: {id: id,...data }
        });
        addUserExercise({Exercises_id: exercise.id, Users_id: exercise.createdBy})(ctx);
        
    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409;
            response.body = {
                code: JSON.stringify(error.code),
                message: JSON.stringify(error.message),
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.',
            error: JSON.stringify(error.message)
        }

    }
}

export const getUserExercisesList = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const data: GetUserExercisesInput = await request.body({type: 'json'}).value;        
        const userExercises: Users_Exercises[] = await prisma.users.findUniqueOrThrow({where: {id: data.userId}}).Users_Exercises();
        const exerciseIds: string[] = userExercises.map((x) => x.Exercises_id);
        const userExList: Exercises[] = await prisma.exercises.findMany({where: {id: {in: exerciseIds}}})
        response.status = 201;
        response.body = {
            exercises: userExList
        }
    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409; 
            response.body = {
                code: JSON.stringify(error.code),
                message: JSON.stringify(error.message)
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: JSON.stringify(error.message)
        }
    }
}

export const addUserExercise = (data: AddUserExerciseInput = {Users_id: "", Exercises_id: ""}) =>
    async(ctx: RouterContext<string>) => {
        const request: Request = ctx.request;
        const response: Response = ctx.response;
        try {
            if(data.Exercises_id === "" || data.Users_id === "") {
                const reqData: AddUserExerciseInput = await request.body({type: 'json'}).value;
                data['Exercises_id'] = reqData.Exercises_id;
                data['Users_id'] = reqData.Users_id;
            }
            
            const newUserExercise: Users_Exercises = await prisma.users_Exercises.create({data: {...data}})
            response.status = 201;
            response.body = {
                message: `new exercise added for user: ${data.Users_id}`,
                exercise: newUserExercise
            }

        } catch(error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                response.status = 409; 
                response.body = {
                    code: JSON.stringify(error.code),
                    message: JSON.stringify(error.message)
                }
                return;
            }
            response.status = 500;
            response.body = {
                message: JSON.stringify(error.message)
            }
        }
    }

export const getExerciseById = (data: GetExerciseByIdInput = {exerciseId: ""}) => 
    async(ctx: RouterContext<string>) : Promise<void | Exercises> => {
        const request: Request = ctx.request;
        const response: Response = ctx.response;

        try {
            if(data.exerciseId === "") {
                data = await request.body({type: 'json'}).value;
                const exercise: Exercises = await prisma.exercises.findFirstOrThrow({where: {id: data.exerciseId}});
                response.status = 200;
                response.body = {
                    exercise: exercise
                }
                return;
            }
            const exercise: Exercises = await prisma.exercises.findFirstOrThrow({where: {id: data.exerciseId}});
            return exercise;
        } catch(error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                response.status = 409; 
                response.body = {
                    code: JSON.stringify(error.code),
                    message: JSON.stringify(error.message)
                }
                return;
            }
            response.status = 500;
            response.body = {
                message: JSON.stringify(error.message)
            }
        }
}