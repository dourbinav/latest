const mongoose = require("mongoose")
 TaskSchema = mongoose.Schema({
    user:{
        type:String,
        required:true        
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        required:true,
        default:false
    },
    deadline:{
        type:Date,
        required:false
    }
})

module.exports = mongoose.model('Tasks',TaskSchema);