
const mongo=require('../database/mongo')


const PostSchema=new mongo.Schema({

    createdAt:{
        type:Date,
        default:Date.now()
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const Post= mongo.model('Post',PostSchema)

module.exports=Post