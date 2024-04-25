require('dotenv').config()
console.log(process.env)
const express = require ('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/twitter',(req,res)=>{
    res.send("Hello twitter");
})
app.get('/login',(req,res)=>{
    res.send("<h1>Please login at our website.</h1>");
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>our youtube channel</h1>");
})

app.listen(port, ()=>{
    console.log(`our first app listening on port ${port}`)
})