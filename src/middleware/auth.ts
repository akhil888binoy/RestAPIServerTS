import jwt from 'jsonwebtoken';
import express from 'express';
import endpoint from "../config/endpoints.config.ts";


const {Request, Response , NextFunction } = express;


export interface CustomRequest extends Request {
    token : string | jwt.JwtPayload
}

export const auth = async (req: Request , res : Response , next: NextFunction)=>{
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token){
            throw new Error();
        }

        const decoded = jwt.verify(token , endpoint.SecretKey);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        res.status(401).send('Please Authenticate');
    }
}