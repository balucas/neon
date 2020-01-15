var express = require('express');
var router = express.Router();

var db = require('../database/db').db

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM country')
    .then(function (data) {
        res.send(data);
    })
    .catch(function (error) {
    })
    // res.send(data);
});

module.exports = router; 