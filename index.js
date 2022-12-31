const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/users");

dotenv.config();

//mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    //console.log(connected to MongoDB)
//}); 

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//app.get("/",(req,res)=>{
//    res.send("homepage")
//});

app.listen(8800,()=>{
    console.log("back-end is running")
});