const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    //console.log(connected to MongoDB)
//});    

app.listen(8800,()=>{
    console.log("back-end is running")
})