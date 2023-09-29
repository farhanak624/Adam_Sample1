const mongoose  = require("mongoose");

//schema creation
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},
    profileImage:String
    
})
const UserModel=mongoose.model("User",userSchema)

module.exports =UserModel
 