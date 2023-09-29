const express= require('express')
const authRouter=require('./routes/auth_router')
const connection= require('./db')
const profileRouter=require('./routes/profile-router')
const multer= require('multer')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/profile',profileRouter)
app.use('/user',authRouter)

app.listen(3001, async()=>{
    try {
        await connection
        console.log(`server running on 3001`);
    } catch (error) {
        console.log(error);
    }
})  