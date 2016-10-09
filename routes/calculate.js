var express = require('express');

var router = express.Router();


console.log('calculate.js');

//var calculateObject = {'add': 0, 'subtract': 0, 'mult': 0, 'divide': 0};


router.get('/', function(req, res) {

    res.send(calculateObject);
    console.log("Res.send peopleLike variable:", calculateObject);
});


router.post('/add', function(req, res) {
    console.log('req.body', req.body);
    var mathValue = req.body;
    console.log('math value', mathValue);
    var mathAnswer = parseInt(mathValue.firstvalue) + parseInt(mathValue.secondvalue);
    var finalAnswer = mathAnswer.toString();
    res.send(finalAnswer);
});

router.post('/subtract', function(req, res) {
    console.log('req.body', req.body);
    var mathValue = req.body;
    console.log('math value', mathValue);
    var mathAnswer = parseInt(mathValue.firstvalue) - parseInt(mathValue.secondvalue);
    var finalAnswer = mathAnswer.toString();
    console.log(finalAnswer);
    res.send(finalAnswer);
});

router.post('/multiply', function(req, res) {
    console.log('req.body', req.body);
    var mathValue = req.body;
    console.log('math value', mathValue);
    var mathAnswer = parseInt(mathValue.firstvalue) * parseInt(mathValue.secondvalue);
    var finalAnswer = mathAnswer.toString();
    console.log(finalAnswer);
    res.send(finalAnswer);
});

router.post('/divide', function(req, res) {
    console.log('req.body', req.body);
    var mathValue = req.body;
    console.log('math value', mathValue);
    var mathAnswer = parseInt(mathValue.firstvalue) / parseInt(mathValue.secondvalue);
    var finalAnswer = mathAnswer.toString();
    console.log(finalAnswer);
    res.send(finalAnswer);
});









module.exports = router;
