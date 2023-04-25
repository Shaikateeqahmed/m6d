const express = require("express");
const booking = express.Router();
const {BookingModel} = require("../modules/bookingmodel.js");
const {UserModel} = require("../modules/usermodel.js");
const { FlightModel } = require("../modules/flightmodel.js");

booking.get("/",async(req,res)=>{
    try {
        let ID = req.body.UserID;
        let userbooking = await BookingModel.find();
        let arr = [];
        for(let i=0; i<userbooking.length; i++){
            let obj ={};
            let user= await UserModel.find({_id:userbooking[i].UserID});
            obj["User"] = user[0];
            let flight = await FlightModel.find({_id:userbooking[i].FlightID});
            obj["Flight"] = flight[0];
            arr.push(obj);
        }
        res.send(arr);
        
    } catch (error) {
        console.log(error);
    }
})

booking.post("/",async(req,res)=>{
    let {FlightID} = req.body;
    try {
        let obj = {
            UserID : req.body.UserID,
            FlightID : FlightID
        }
        let book = new BookingModel(obj);
        await book.save();
        res.send("Flight successfully Booked");
    } catch (error) {
        console.log(error);
    }
})
module.exports={booking};