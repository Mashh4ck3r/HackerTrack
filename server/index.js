import express from "express";
import cors from 'cors';
import mongoose  from 'mongoose';

import {userRouter} from './routes/users.js';

const app = express()


// middlewares for get data form front end
app.use(express.json());
app.use(cors());

app.use("/auth",userRouter)

// mongoose for database connection

mongoose.connect("mongodb+srv://dhanush321alt:Dhanush321@hacktrack.wuglij6.mongodb.net/");

app.listen(3001,()=> console.log("...................................Server Started.............................................."))