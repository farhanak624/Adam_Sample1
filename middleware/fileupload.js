const multer= require("multer");

const path=require('path'); 

const storage= multer.diskStorage({
    destination:path.join(__dirname,"../public/images"),
    filename:function(req,file,cb){
        cb(
            null,Date.now() +"-"+ file.originalname
        ); 
    }
});
const upload =multer({storage:storage});

const imagesUpload=upload.single("profileImage");

module.exports={imagesUpload}