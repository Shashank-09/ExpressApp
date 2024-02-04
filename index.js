require('dotenv').config()
const express  = require('express')
const app = express();

app.get('/' , (req , res) => {
    res.send("hello expresss");
})

app.get("/twitter", (req , res) => {
    res.send("shashank-09")
})

app.get('/login' , (req , res) => {
    res.send("<h1>please login</h1>")
})

app.get('/signup' , (req , res) => {
    res.send("<h1>please sign up</h1>")
})

app.listen(process.env.PORT , () => {
    console.log("App lisning on port 3000");

})

