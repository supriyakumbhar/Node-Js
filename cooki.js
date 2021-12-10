const express = require('express');
const app = express();
const bodyParser = require('bodyParser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({ secret : "TU6+a+>8e8}#sCPM"}));

app.get('/', function(req, res){
    res.send('Welcome to home page.');
});

app.get('/session_test', function(req, res){
    if ( res.session.count ){
        req.session.count++;
        res.send("count: " + req.session.count);
    }else {
        req.session.count = 1;
        res.send("Welcome first time. Count:" + req.session.count)
    }
});

app.listen(80);
