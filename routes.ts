
import { refreshAuth, signIn, signUp, updateProfilePic } from "./controllers/user.controller.ts";
import { Router } from "./utilities/deps.ts";
import { verifyAuth } from "./middleware/verifyAuth.ts";
import { validate } from "./utilities/validate.ts";
import { signUpSchema, loginSchema, refreshSchema, profilePicSchema } from "./utilities/schema.ts";

const router = new Router();

router
    .post("/users/login/", validate(loginSchema), signIn)
    .post("/users/create/", validate(signUpSchema), signUp)
    .post("/users/refresh/", validate(refreshSchema), refreshAuth)
    .put("/users/", validate(profilePicSchema), verifyAuth, updateProfilePic)
    
export default router;
