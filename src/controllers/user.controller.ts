import { Prisma, PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import endpoint from '../config/endpoints.config.ts';

const prisma = new PrismaClient().$extends(withAccelerate())


const registerUser = async (req: Request , res : Response)=>{

    const { name , email , password } = req.body;

    const saltRounds = 10;

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await prisma.user.create({

        data: {
            name,
            email,
            password : hashedPassword
        },
    })

    res.json(result)
}

const loginUser = async (req: Request , res: Response )=> {
    const {email , password} = req.body;

    let user = await prisma.user.findUnique({
        where : {email : email}
    });

    try {
        const match = await bcrypt.compare(password , user?.password);
        if (match){

            const token = jwt.sign({ _id : user?.id.toString(), name : user?.email}, endpoint.SecretKey , {
                expiresIn: '2 days',
            });

            res.status(200).json({
                message: 'Login successful.',
                token : token
            });

        }else {
            res.status(401).json({ error: 'Invalid username or password.' });
        }
    } catch (error) {
        console.error("Error Authenticated: ", error);
        res.status(500).json({error: 'Failed to authenticate'});
    }
}

const getUser = async (req: Request , res: Response)=>{

}

export {registerUser , loginUser , getUser};