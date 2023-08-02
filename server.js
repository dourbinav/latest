const express= require("express")
const server=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const task=require("./routes/task")
const user=require("./routes/user")


mongoose.connect('mongodb+srv://dourbinaval:Rjc9vX1SEaF4tdsW@cluster0.ba67f4k.mongodb.net/')
mongoose.connection.on('error',err=>{
    console.log(err);
    console.log("connection failed");
})
mongoose.connection.on('connected',connected=>{
    console.log("connected")
}
)
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use("/user",user)
server.use("/task",task)

module.exports=server