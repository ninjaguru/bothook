var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
app       = express(),
mongoose     = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ninja:ninjap4ss@cluster0-ingf7.mongodb.net/botdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });

  app.get('/price',function(req,res){
    res.send('Price is 100 USD');
  });
  
app.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});