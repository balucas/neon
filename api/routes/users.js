var express = require('express');
var router = express.Router();
var db = require('../database/db').db

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST create user */
router.post('/create', function(req, res, next) {
  console.log(req.body)
  var email = req.body.email
  var first = req.body.firstName
  var last = req.body.lastName
  var pass = req.body.password

  db.any('INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, crypt($4, gen_salt(\'bf\')))'
    , [email, first, last, pass])
    .then(function (data) {
      console.log('DATA: ', data)
      res.send(data)
    })
    .catch(function (error) {
      console.log('Error: ', error)
      res.send(error)
    })
});

module.exports = router; 
