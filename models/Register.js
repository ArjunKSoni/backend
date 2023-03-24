const mongoos =require('mongoose')
const RegisterSchema=new mongoos.Schema({
    user:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:Number,
        default: "general"
    }
})
const Register=new mongoos.model("Register",RegisterSchema)

module.exports= Register;