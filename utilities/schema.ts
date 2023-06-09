import { z } from "./deps.ts"
const PASSWORD_VALIDATOR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,32}$/;

export const signUpSchema = z.object({
    body: z.object({
        username: z.string({required_error: 'Username is Required'}).max(30),
        email: z.string({required_error: 'Email is Required'}).email(),
        password: z.string({required_error: 'Password is Required'}).regex(PASSWORD_VALIDATOR),
    }),
}).required();

export const loginSchema = z.object({
    body: z.object({
        email: z.string({required_error: 'Email is Required'}).email(),
        password: z.string({required_error: 'Password is Required'}).regex(PASSWORD_VALIDATOR),    
    }),
}).required();
export const profilePicSchema = z.object({
    headers: z.string(),
    params: z.object({
        id: z.string().uuid(),
    })
}).required();

export const refreshSchema = z.object({
    cookies: z.string(),
    body: z.object({
        id: z.string().uuid()
    })
}).required();

const muscleGroupEnum = z.enum(["Back", "Chest", "Legs", "Shoulders", "Arms", "Abs"])
const exerciseTypeEnum = z.enum(["Cardio", "Strength"])

export const createExerciseSchema = z.object({
    headers: z.string(),
    body: z.object({
        name: z.string({required_error: 'Name is Required'}).max(52),
        createdBy: z.string().uuid(),
        description: z.string().nullable(),
        musclegroup: muscleGroupEnum,
        exercisetype: exerciseTypeEnum
    })
}).required();

export const imagePngSchema = z.string().endsWith("png");
export const imageJpegSchema = z.string().endsWith("jpeg");

export const getUserExercisesSchema = z.object({
    headers: z.string(),
    body: z.object({
        userId: z.string().uuid()
    })
}).required();

export const addUserExerciseSchema = z.object({
    headers: z.string(),
    body: z.object({
        Users_id: z.string().uuid(),
        Exercises_id: z.string().uuid(),
    })
}).required();

export const getExerciseByIdSchema = z.object({
    headers: z.string(),
    body: z.object({
        exerciseId: z.string().uuid()
    })
})

export const createWorkoutPlanSchema = z.object({
    headers: z.string(),
    body: z.object({
        name: z.string().max(52),
        description: z.string().nullable(),
        createdBy: z.string().uuid()
    })
}).required();

export const addUserWorkoutPlanSchema = z.object({
    headers: z.string(),
    body: z.object({
        Users_id: z.string().uuid(),
        WorkoutPlans_id: z.string().uuid(),
    })
}).required();

export const getWorkoutPlanByIdSchema = z.object({
    headers: z.string(),
    body: z.object({
        WorkoutPlans_id: z.string().uuid()
    })
}).required();

export const getUserWorkoutPlanSchema = z.object({
    headers: z.string(),
    body: z.object({
        Users_id: z.string().uuid()
    })
}).required();

export type SignUpInput = z.TypeOf<typeof signUpSchema>["body"];
export type SignInInput = z.TypeOf<typeof loginSchema>["body"];
export type refreshAuthInput = z.TypeOf<typeof refreshSchema>;
export type ProfilePicUpdateInput = z.TypeOf<typeof profilePicSchema>["params"];
export type CreateExerciseInput = z.TypeOf<typeof createExerciseSchema>["body"];
export type GetUserExercisesInput = z.TypeOf<typeof getUserExercisesSchema>["body"];
export type AddUserExerciseInput = z.TypeOf<typeof addUserExerciseSchema>["body"];
export type GetExerciseByIdInput = z.TypeOf<typeof getExerciseByIdSchema>["body"];
export type CreateWorkoutPlanInput = z.TypeOf<typeof createWorkoutPlanSchema>["body"];
export type AddUserWorkoutPlanInput = z.TypeOf<typeof addUserWorkoutPlanSchema>["body"];
export type GetWorkoutPlanByIdInput = z.TypeOf<typeof getWorkoutPlanByIdSchema>["body"];
export type GetUserWorkoutPlanInput = z.TypeOf<typeof getUserWorkoutPlanSchema>["body"];