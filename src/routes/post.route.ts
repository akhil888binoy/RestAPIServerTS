import {Router} from "express";
import { addPost, deletePost, getPost, getPosts, updatePost  } from "../controllers/post.controller.ts";
import {auth } from "../middleware/auth.ts";

const postRoute = () =>{

    const router = Router();
    
    router.post("/post/add", auth ,  addPost);
    router.get("/post/posts", auth , getPosts);
    router.get("/post/:id", auth ,  getPost);
    router.put("/post/:id", auth , updatePost);
    router.delete("/post/:id", auth , deletePost);

    return router;
}   

export { postRoute };