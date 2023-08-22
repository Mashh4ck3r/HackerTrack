import express from "express";
import cors from 'cors';
import mongoose  from 'mongoose';

const app = express()


// middlewares for get data form front end
app.use(express.json());
app.use(cors());

// mongoose for database connection

mongoose.connect("mongodb+srv://dhanush321alt:Alt_Dhanush_321@hacktrack.wuglij6.mongodb.net/");

app.listen(3001,()=> console.log("...................................Server Started.............................................."))