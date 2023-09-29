const mongoose= require('mongoose')

// require('dotenv').config()

const connection=mongoose.connect("mongodb+srv://admin:admin123@cluster0.zsvlenv.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
module.exports=  connection;