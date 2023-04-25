const express = require("express");
const app = express();
const {connection} = require("./config/connection.js");
const {user} = require("./routes/userroute.js");
const {authentication} = require("./middleware/authentication.js");
const {flight} = require("./routes/flightroute.js");
const {booking} = require("./routes/bookingroute.js");
require("dotenv").config();

app.use(express.json());
app.use("/user",user);
app.use(authentication);
app.use("/flights",flight);
app.use("/booking",booking);

app.listen(process.env.port,async()=>{
    await connection;
    console.log(`server is running on port ${process.env.port}`);
})