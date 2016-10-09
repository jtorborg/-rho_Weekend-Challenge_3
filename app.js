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


////////////

//IMPORTANT: The logic for the calculator needs to be housed on the Server.

// Once the Server receives it, create the logic to compute the numbers in 1 of 4
//different ways: The server should be able to handle (1) addition, (2) subtraction,
//(3) multiplication, and (4) division. Once the result of the mathematical operation
//is determined, it should be sent back down to the Client where it will be displayed
//on the DOM.

////////////

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
