const express = require("express")
const server = express()
const note = []
server.use(express.json())
server.get("/note",(req,res)=>{
    
    res.send(note)
console.log(note);

    
})
server.post("/note",(req,res)=>{
    res.send("note created")
    console.log(req.body);
    note.push(...req.body)
    
})
server.listen(3000,()=>{
    console.log("server is running at 3000");
    
})