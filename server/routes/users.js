import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';

const userRouter = express.Router()

userRouter.post("/register",async (req,res)=>{

    const {username,password} = req.body;

    const user = await UserModel.findOne({username})

    if (user){
       return res.json({message:"user alredy exist"});
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new UserModel({username:username,password:hashedPassword});
    await newUser.save();

    res.json({message:"User registered successfully",user:newUser});

});


userRouter.post("/login", async (req,res)=>{

    const {username,password} = req.body;
    const user = await UserModel.findOne({username});

    if(!user){
        return res.json({message:"User doesn't exist  !"})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.json({message:"Password is incorrect"})
    }

    const token = jwt.sign({id:user._id},"secret");

    res.json({token,userId:user._id})

});


export {userRouter};