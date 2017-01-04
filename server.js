var express = require("express");

var app = express();

app.get('/', function (req, res) {
    
    var re = /\([^)(]*\)/;
    
    var data = {
        ipaddress: req.headers['x-forwarded-for'] || req.ip,
        language: req.headers['accept-language'].split(',')[0],
        software: re.exec(req.headers['user-agent'])[0].slice(1,-1)
    }
    
    res.send(data);
})

app.listen(process.env.PORT);