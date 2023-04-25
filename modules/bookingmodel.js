const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    UserID : String,
    FlightID : String
})

const BookingModel = mongoose.model("book",bookingSchema);

module.exports={BookingModel};