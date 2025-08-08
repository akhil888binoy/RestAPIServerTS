import {Router} from "express";
import { getUser, loginUser, registerUser } from "../controllers/user.controller.ts";
import {auth} from "../middleware/auth.ts";

const userRoute = () =>{
    
    const router = Router();
    
    router.post("/user/register", registerUser);
    router.post("/user/login", loginUser);
    router.get("/user", auth, getUser);
    
    return router;
}

export { userRoute };