const express = require("express");
const user = express.Router();
const {UserModel} = require("../modules/usermodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

user.get("/",(req,res)=>{
    res.send("user page");
})

user.post("/register",async(req,res)=>{
    try{
        let {name,email,password} = req.body;
        let user = await UserModel.find({email});
        if(user.length>0){
            res.send("User with this Email Already have!");
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    console.log(err);
                }else{
                    let userdata = new UserModel({name,email,password:hash});
                    await userdata.save();
                    res.send("User Successfully Register!");
                }
            })
        }
    }catch(err){console.log(err)}
})

user.post("/login",async(req,res)=>{
    try{
        let {email,password} = req.body;
        let user = await UserModel.find({email});
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(err){
                    res.send("Invalid Credientials");
                }else{
                    let token = jwt.sign({UserID:user[0]._id},process.env.key);
                    res.send(token);
                }
            })
        }else{
            res.send("Invalid Credientials");
        }
    }catch(err){console.log(err)};
})
module.exports={user};