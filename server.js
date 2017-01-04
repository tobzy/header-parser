var express = require("express");

var app = express();

app.get('/', function (req, res) {
    var data = {
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
    
    res.send(data);
})

app.listen(process.env.PORT);