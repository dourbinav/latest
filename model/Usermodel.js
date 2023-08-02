const mongoose = require('mongoose');
UserSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    }
})

module.exports = mongoose.model('User',UserSchema);