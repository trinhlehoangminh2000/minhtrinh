///import express module
var express = require('express');
var parser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var path = require('path');



//create an express app
var app = express();
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));
app.use(parser.json());
app.use(parser.urlencoded());
app.use(express.static('public'));



app.get('/', function(req, res) {  
    let data = {
        title: "Minh Trinh"
    }
    ejs.renderFile('./html/index.ejs', data, null, function(err, str){
        // str => Rendered HTML string
        res.send(str);
    });
});


//run the server on port 3000
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server running on port:" + port);
});
