var express = require('express');
var router = express.Router();

var db = require('../database/db').db

router.get('/', function(req, res, next) {
    console.log(req)
    db.any('SELECT * FROM country')
    .then(function (data) {
        // console.log('DATA:', data);
        res.send(data);
    })
    .catch(function (error) {
        // console.log('ERROR:', error)
    })
    // console.log(data)
    // res.send(data);
});

module.exports = router; 