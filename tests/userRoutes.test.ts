import { RouterContext, testing } from "../utilities/deps.ts";
import { Middleware } from "../utilities/deps.ts";
import { assert, assertEquals } from "../utilities/deps.ts";
import { verifyAuth } from "../middleware/verifyAuth.ts";
import { signUp, signIn, refreshAuth, updateProfilePic } from "../controllers/user.controller.ts";

Deno.test({
    name: "test user sign up",
    async fn() {
        const ctx: RouterContext<string> = testing.createMockContext({
            path: "/api/users/create/",
            method: "post",
            params: {
                email: 'kalebkoebelgd@gmail.com',
                username: 'KalebSK0',
                password: 'thisPassword12!'
            }
        });
        
    }
})