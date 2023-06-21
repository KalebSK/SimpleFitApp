
import { refreshAuth, signIn, signUp, updateProfilePic } from "./controllers/user.controller.ts";
import { Router } from "./utilities/deps.ts";
import { verifyAuth } from "./middleware/verifyAuth.ts";
import { validate } from "./middleware/validate.ts";
import { createExerciseSchema, signUpSchema, loginSchema, refreshSchema, profilePicSchema, getUserExercisesSchema, addUserExerciseSchema, getExerciseByIdSchema } from "./utilities/schema.ts";
import { addUserExercise, createExercise, getExerciseById, getUserExercisesList } from "./controllers/exercise.controller.ts";

const router = new Router();

router
    .post("/users/login/", validate(loginSchema), signIn)
    .post("/users/create/", validate(signUpSchema), signUp)
    .post("/users/refresh/", validate(refreshSchema), refreshAuth)
    .put("/users/", validate(profilePicSchema), verifyAuth, updateProfilePic)
    .post("/exercise/create/", validate(createExerciseSchema),verifyAuth, createExercise)
    .get("/users/exercises/", validate(getUserExercisesSchema), verifyAuth, getUserExercisesList)
    .post("/users/exercises/", validate(addUserExerciseSchema), verifyAuth, addUserExercise) 
    .get("/exercise/", validate(getExerciseByIdSchema), verifyAuth, getExerciseById)
export default router;
