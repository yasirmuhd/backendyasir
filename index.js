// 1)importing express

const express = require("express")

//2)initialiising

const app = new express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//3)api creation

app.get('/',(req,res)=>{
    res.send("hello welcome to backend")
})
app.post('/sign',(req,res)=>{
    res.send(req.body)

    
})
//4)setting port

app.listen(3006,()=>(
 console.log("port 3005 is running")
))
