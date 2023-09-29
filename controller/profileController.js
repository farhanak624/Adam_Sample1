const UserModel= require('../model/User')
const fileUpload=require('../middleware/fileupload');
const { default: mongoose } = require('mongoose');

module.exports={
    getProfile:async(req,res)=>{

        try {
            console.log(req.user);
            const userDetails= req.user
    
            const getUser= await UserModel.findById(userDetails.userId)
            
            // const userProfile= await UserModel.findOne({email})
            res.json({"message": `Hello ${getUser.username}`})
        } catch (error) {
            res.status(404).json({"message":"Login Error"})
        }
},
    profileUpdate:async(req,res)=>{
        try {
            // console.log(req.file)
            const {username}=req.body
            const {file}=req.file
            // console.log(username);
            // let {username,email,profileImage} = req.body
            
            const userAuthDetails=req.user
            // console.log(userAuthDetails);
            if(username.trim('')!=''){
                // console.log("hello");
                const getUser=  await UserModel.findByIdAndUpdate(new mongoose.Types.ObjectId (userAuthDetails.userId), { username: username })
            // console.log(getUser);
            }

            if (req.file){
                const getUser=  await UserModel.findByIdAndUpdate(new mongoose.Types.ObjectId (userAuthDetails.userId), { profileImage:req.file.filename})
                console.log("yyyyy",getUser);
            }

            if(req.file){ 
                console.log("file is",req.file);
            }
            // console.log(userAuthDetails);
            res.status(200).json({"message":"updation success"})
        } catch (error) {
            console.log(error.message);
            res.status(404).json({"message":"updation failed"})
            
        }
    }
}