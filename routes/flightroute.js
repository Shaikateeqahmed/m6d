const express = require("express");
const flight = express.Router();
const {FlightModel} = require("../modules/flightmodel.js");

flight.get("/",async(req,res)=>{
    try{
      let flights = await FlightModel.find();
      res.send(flights);
    }catch(err){console.log(err)}
})
flight.get("/:id",async(req,res)=>{
    let ID = req.params.id;
    try{
      let flight = await FlightModel.find({_id:ID});
      res.send(flight);
    }catch(err){console.log(err)}
})

flight.post("/",async(req,res)=>{
    try {
        let payload = req.body;
        let flightdata = new FlightModel(payload);
        await flightdata.save();
        res.send("flight added Successfully!")
    } catch (error) {
        console.log(error);
    }
})

flight.patch("/:id",async(req,res)=>{
    try {
        let ID = req.params.id;
        let payload = req.body;
        await FlightModel.findByIdAndUpdate({_id:ID},payload);
        res.send(`Flight having id ${ID} is Updated`);
    } catch (error) {
        console.log(error);
    }
})

flight.delete("/:id",async(req,res)=>{
    try {
        let ID = req.params.id;
        await FlightModel.findByIdAndDelete({_id:ID});
        res.send(`Flight having id ${ID} is Deleted`);
    } catch (error) {
        console.log(error);
    }
})
module.exports={flight};