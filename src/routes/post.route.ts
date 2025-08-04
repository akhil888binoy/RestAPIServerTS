import {Router} from "express";
import { addPost, deletePost, getPost, getPosts, updatePost  } from "../controllers/post.controller.ts";

const postRoute = () =>{

    const router = Router();
    
    router.post("/post/add", addPost);
    router.get("/post/posts", getPosts);
    router.get("/post/:id", getPost);
    router.put("/post/:id", updatePost);
    router.delete("/post/:id", deletePost);

    return router;
}   

export { postRoute };