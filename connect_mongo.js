const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://aksoni0520:dXTfwa8DfQzjbsew@auth.wabax4u.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesfull")
}).catch((e)=>{
    console.log(`error is ${e}`)
})

