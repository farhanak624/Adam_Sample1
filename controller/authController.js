const UserModel =require('../model/User')
const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')
const multer=require('multer')


module.exports ={
    signUp:async (req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password} = req.body

        const emailExist= await UserModel.findOne({email})

        if(emailExist){
            return res.status(400).json({"message":"Email lready exist"})
        }
        
        const encryptedPassword= await bcrypt.hash(password,10)
console.log(encryptedPassword);
        new UserModel(
            {
                username,
                email,
                password:encryptedPassword,
                
            }).save()
 

        res.json({"message":"registered successfully"})
    }catch(error){
        res.status(500).json({error:"Failed to register"})
    }

},
    userLogin:async(req,res)=>{
        try {
            const {email,password} =req.body
console.log(email);
            const user= await UserModel.findOne({email})
            console.log(user);
            
            if(!user){
                return res.status(404).json({"message":"Email not found"})
                
            }
           
            let isPasswordValid=await bcrypt.compare(password,user.password)
           
            if(!isPasswordValid){
                return res.status(404).json({"message": "wrong password"})
            }
            const usertoken= await jwt.sign({userId: user._id},'secret_key', {expiresIn:"1h"})
            console.log(usertoken);
            res.status(200).json({usertoken})

        }catch (error) {
            console.log("error",error.message);
            res.status(401).json({"message":"User not found"})
        }
    }
}