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

// Route for 'about' page
app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>");
});

// Route for 'contact' page
app.get('/contact', (req, res) => {
    res.send("<h1>Contact Us</h1>");
});

// Route with dynamic parameter 'username'
app.get('/user/:username', (req, res) => {
    res.send(`<h1>Hello, ${req.params.username}</h1>`);
});

app.listen(process.env.PORT , () => {
    console.log("App lisning on port 3000");

})

