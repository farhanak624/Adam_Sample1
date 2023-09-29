const express=require('express')
const router= express.Router()
const authController= require('../controller/authController')
const middleWare= require('../middleware/jwtAuthentication')


router.post('/register',authController.signUp)

router.post('/userLogin',authController.userLogin)


module.exports=router