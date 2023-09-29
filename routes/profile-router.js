const express= require('express')
const router= express.Router()

const profileController= require('../controller/profileController')
const authController = require('../controller/authController')
const jwtMiddleWare= require('../middleware/loginCheck')
const { imagesUpload } = require('../middleware/fileupload')


//profile router
router.get('/profilePage',jwtMiddleWare.checkLoggedIn,profileController.getProfile)

router.post('/profileUpdate',jwtMiddleWare.checkLoggedIn,imagesUpload,profileController.profileUpdate)


module.exports=router