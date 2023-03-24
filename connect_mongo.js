const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/farmExpert',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesfull")
}).catch((e)=>{
    console.log(`error is ${e}`)
})

