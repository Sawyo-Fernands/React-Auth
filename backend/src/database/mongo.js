

const mongo=require('mongoose')


mongo.connect("mongodb://localhost/auth",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongo connect")
}).catch( (error)=>{
    console.log(error)
})

module.exports=mongo