import { Request, Response } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { RouterContext } from "../utilities/deps.ts";
import { Prisma } from "../generated/client/deno/edge.js";
import { AddUserWorkoutPlanInput, CreateWorkoutPlanInput } from "../utilities/schema.ts";
import { prisma } from "../index.ts";
import { Users_WorkoutPlans, WorkoutPlans } from "../generated/client/index.d.ts";

export const addUserWorkoutPlan = (data: AddUserWorkoutPlanInput = {WorkoutPlans_id: "", Users_id: ""}) => 
    async(ctx: RouterContext<string>): Promise<void> => {
        const request: Request = ctx.request;
        const response: Response = ctx.response;
        try {

            if(data.Users_id === "" || data.WorkoutPlans_id === "") {
                const reqData: AddUserWorkoutPlanInput = await request.body({type: "json"}).value;
                data['Users_id'] = reqData.Users_id;
                data['WorkoutPlans_id'] = reqData.WorkoutPlans_id;
            } 
            const userWorkoutPlan: Users_WorkoutPlans = await prisma.users_WorkoutPlans.create({data:{...data}});
            response.status = 201;
            response.body = {
                message: `Workout created for: ${data.Users_id}`,
                workoutplan: userWorkoutPlan
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

export const createWorkoutPlan = async(ctx: RouterContext<string>): Promise<void> => {
    const request: Request = ctx.request;
    const response: Response = ctx.response;
    try {
        const data: CreateWorkoutPlanInput = await request.body({type: "json"}).value;
        const id: string = crypto.randomUUID();
        const workoutplan: WorkoutPlans = await prisma.workoutPlans.create({data:{id: id, ...data}})
        addUserWorkoutPlan({Users_id: workoutplan.createdBy, WorkoutPlans_id: workoutplan.id})(ctx);
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