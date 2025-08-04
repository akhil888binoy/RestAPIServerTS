import {Router} from "express";
import { getUser, loginUser, registerUser } from "../controllers/user.controller.ts";

const userRoute = () =>{
    
    const router = Router();
    
    router.post("/user/register", registerUser);
    router.post("/user/login", loginUser);
    router.get("/user/:userId", getUser);

    return router;
}

export { userRoute };