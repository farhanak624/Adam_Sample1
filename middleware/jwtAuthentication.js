const jwt=require('jsonwebtoken')

module.exports={

    checkLoggedIn:async(req,res,next)=>{
    const AuthHeader= req.headers.authorization;
   
if(AuthHeader)
{
    const convertedToken= AuthHeader.split(" ")[1];
    console.log(convertedToken);
    if(!convertedToken){
        return res.status(401).json({message:"Unauthorized"})
    }
    await jwt.verify(convertedToken,'secret_key',(error,user)=>{
        if(error){
            return res.status(401).json({message:"notverified"})
        }
        req.user=user
        next() 
    })
}

    
  
}
}