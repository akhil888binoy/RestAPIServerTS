
import { Prisma, PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const addPost = async ( req: Request, res: Response) => {

    const { title  , content , authorEmail } = req.body;
    const result = await prisma.post.create({
        data: {
            title ,
            content ,
            published: false,
            author:{connect: {email: authorEmail}}
        },
    })

    res.json(result)
}

const getPosts= async (req: Request, res : Response)=>{

}
const getPost= async (req: Request , res: Response)=>{

}
const updatePost= async (req: Request , res: Response)=>{

}

const deletePost= async (req: Request , res : Response)=>{

}

export {addPost, getPosts, getPost , updatePost, deletePost};