const express = require("express")
const server = express() // serrver ka instance create kardeya 
server.get("/",(req,res) => {

    res.send("helloworld")
},
server.get("/about",(req,res)=>{
    res.send("ye yadqv bhai hai hai")
})
)
server.listen(3000) // server run ho gaya ya actualstart