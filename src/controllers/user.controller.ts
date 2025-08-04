import { Prisma, PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient().$extends(withAccelerate())


const registerUser = async (req: Request , res : Response)=>{
    const { name, email } = req.body

    const result = await prisma.user.create({
        data: {
            name,
            email,
        },
    })
    res.json(result)
}

const loginUser= async (req: Request , res: Response )=>{

}

const getUser = async (req: Request , res: Response)=>{

}

export {registerUser , loginUser , getUser};