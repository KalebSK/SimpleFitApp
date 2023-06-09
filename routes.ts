
import { SignIn, SignUp, UpdateProfilePic } from "./controllers/user.controller.ts";
import { Router } from "./utilities/deps.ts";


const router = new Router();

router
    .post("/users", SignIn)
    .post("/users", SignUp)
    .put("/users/:id/", UpdateProfilePic)
    
export default router;
