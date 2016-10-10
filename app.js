//==REQUIRED VARIABLES==//
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//==ASSIGN EXPRESS TO VARIABLE==//
var app = express();

//==ROUTE VARIABLES==//
var calculate = require('./routes/calculate');

//==MIDDLEWARE==//
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

//==ROUTES==//
// send any requests it receives for '/calculate' to the address located in var calculate
app.use('/calculate', calculate);

//==========//
app.use(function(req, res, next){
  console.log('Got a request'); //log appears in terminal
  next();
});

//=====STATIC FILES=====//
app.get('/', function (req, res) {
  console.log('Received a request at', new Date() + '');
  //__dirname corresponds to express_intro
  var file = path.join(__dirname, 'public/views/index.html');
  console.log('file', file);
  res.sendFile(file);
});

//=====START SERVER=====//
app.listen(3000);
