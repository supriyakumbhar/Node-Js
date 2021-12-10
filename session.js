require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const schema = mongoose.schema;
const session = require("express-session");
const { stringify } = require('querystring');

mongoose.connect("mongodb://localhost:27017/NewDB", {useNewUrlParser: true})

const userSchema = new schema({
    username: {type: String, unique: true},
    password: Number,
    name: String,
})

const User = mongoose.model("User",userSchema);

server = express();
server.use(express.static(process.env.STATIC_FOLDER))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge:60000 }
}))

server.get("/test", (req,res)=>{
    req.session.test ? req.session.test++ : req.session.test=1;
    req.send(req.session.test.toString());
})

server.listen(process.env.PORT, ()=>{
    console.log("server at ",process.env.PORT);
})