const express = require("express");
const app = express();
const port = 3000;

app.get("/" , (req, res) => {
    res.send("Welcome to my Home Page");
});

app.get("/about" , (req, res) => {
    res.send("Welcome to the about page");
});

app.get("/contact" , (req, res) => {
    res.send("Welcome to the contact page");
});

app.get("/temp" , (req, res) => {
    res.send("Welcome to the temp page");
});



app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});