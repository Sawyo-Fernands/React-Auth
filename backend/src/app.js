
const express=require('express')

const app=express()

const Post=require('../src/Models/post')

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.listen(5000,()=>{

    console.log("Server connect")
})


app.post('/login',async (req,res)=>{

    try{

        const {email,password}=req.body
        const usuario= await Post.findOne({email,password})

        if(usuario){
            res.send({usuario})
        }

    }catch(error){
        console.log(error)
    }

})



