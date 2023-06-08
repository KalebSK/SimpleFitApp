
import { SignIn, SignUp, UpdateProfilePic } from "./controllers/user.ts";
import { helpers } from "./utilities/deps.ts";
import { Router } from "./utilities/deps.ts";


const router = new Router();

router
    .get("/users", SignIn)
    .post("/users", SignUp)
    .put("/users/:id/:url", (ctx) => {
        console.log(helpers.getQuery(ctx));
    })
    
export default router;
