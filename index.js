const express= require('express')
const app=express()
var cors = require('cors')
const port=3000
require("./connect_mongo")

// session creation   npm i express-session
var session=require("express-session")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/store',require('./routes/store'))



app.listen(port,()=>{
    console.log(`successfully loaded at ${port}`)
})

module.exports=app;