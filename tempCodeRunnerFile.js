const express = require('express')
const app =express()
const port =3000

app.get('/',(req,res)=>{
    res.send("Hello world");
})


app.get('/about',(req,res)=>{
    res.send("Hello world about");
})

app.listen(port,()=>{
    console.log(`the app is listenint at http://localhost:${port}`);
})