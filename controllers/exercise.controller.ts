import { Request, Response } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { RouterContext } from "../utilities/deps.ts";
import { CreateExerciseInput, AddUserExerciseInput, GetExerciseByIdInput, GetUserExercisesInput } from "../utilities/schema.ts";
import { Exercises, Users_Exercises } from "../generated/client/index.d.ts";
import { prisma } from "../index.ts";
import { Prisma } from "../generated/client/index.js";

export const createExercise = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const id: string = crypto.randomUUID();
        const data: CreateExerciseInput = await request.body({type: 'json'}).value;
        const exercise: Exercises = await prisma.exercises.create({
            data: {id: id,...data }
        });
        const _userExercise: Users_Exercises = await prisma.users_Exercises.create({data: {Users_id: data.createdBy, Exercises_id: id}});
        response.status = 201;
        response.body = {
            message: 'exercise created.',
            exercise: exercise
        }
        
    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409;
            response.body = {
                code: error.code,
                message: error.message,
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.',
            error: error.message
        }

    }
}

export const getUserExercisesList = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const data: GetUserExercisesInput = await request.body({type: 'json'}).value;
        const userExercises: Users_Exercises[] = await prisma.users_Exercises.findMany({where: {Users_id: data.userId }});
        const userExList: Exercises[] = new Array<Exercises>();
        
        for(const userEx of userExercises) {
            const exercise = await prisma.exercises.findFirst({where: {id: userEx.Exercises_id}})
            if(!exercise) {
                continue;
            }
            userExList.push(exercise);
        }
        response.status = 201;
        response.body = {
            exercises: userExList
        }
    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409;
            response.body = {
                code: error.code,
                message: error.message,
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.',
            error: error.message
        }
    }
}

export const addUserExercise = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const data: AddUserExerciseInput = await request.body({type: 'json'}).value;
        const newUserExercise: Users_Exercises = await prisma.users_Exercises.create({data: {Users_id: data.userId, Exercises_id: data.exerciseId}})
        response.status = 201;
        response.body = {
            message: `new exercise added for user: ${data.userId}`,
            exercise: newUserExercise
        }

    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409; 
            response.body = {
                code: error.code,
                message: error.message
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.',
            error: error.message
        }
    }
}

export const getExerciseById = async(ctx: RouterContext<string>) => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;

    try {
        const data: GetExerciseByIdInput = await request.body({type: 'json'}).value;
        const exercise: Exercises = await prisma.exercises.findFirstOrThrow({where: {id: data.exerciseId}});
        response.status = 200;
        response.body = {
            exercise: exercise
        }
    } catch(error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            response.status = 409;
            response.body = {
                code: error.code,
                message: error.message
            }
            return;
        }
        response.status = 500;
        response.body = {
            message: 'server error.',
            error: error.message
        }
    }
}