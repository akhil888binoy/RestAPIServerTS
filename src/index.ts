
import express from 'express'
import { userRoute } from './routes/user.route.ts'
import { postRoute } from './routes/post.route.ts'
import * as dotenv from 'dotenv';

const app = express()
dotenv.config();
app.use(express.json())
app.use("/",  userRoute());
app.use("/", postRoute());

const server = app.listen(3000, () =>
      console.log(`🚀 Server ready at: http://localhost:3000`)
)