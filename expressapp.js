const express = require('express')
const app =express()
const port =3010

app.get('/',(req,res)=>{
    res.send("Hello world");
})


app.get('/about',(req,res)=>{
    res.send("Hello world about");
})

app.listen(port,()=>{
    console.log(`the app is listening at http://localhost:${port}`);
})