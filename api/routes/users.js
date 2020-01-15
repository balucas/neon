var express = require('express');
var router = express.Router();
var db = require('../database/db').db

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST create user */
router.post('/create', function(req, res, next) {
  var email = req.body.email
  var first = req.body.firstName
  var last = req.body.lastName
  var pass = req.body.password

  //Check if any fields are missing
  if( !email || !first || !last || !pass ){
    err = {
      name: 'error',
      constraint: 'missing_field'
    }
    res.send(err);
  }else{
    //Create user
    db.any('INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, crypt($4, gen_salt(\'bf\')))', 
      [email, first, last, pass])
      .then(function (data) {
        // console.log('DATA: ', data)
        res.send(data)
      })
      .catch(function (error) {
        // console.log('Error: ', error)
        res.send(error)
      })
  }
});

/* POST login */
router.post('/auth', function(req, res, next){
  var email = req.body.email
  var password = req.body.password

  if( !email || !password ){
    err ={
      name: 'error',
      constraint: 'missing_field'
    }
    res.send(err);
  }else{
    db.one('SELECT id, first_name, last_name, email FROM users WHERE email = $1 AND password = crypt($2, password)',
    [email, password])
    .then(function (data){
      console.log('AUTH DATA: ', data)
      res.send(data)
    })
    .catch(function (error){
      // console.log('Error auth: ', error)

      var message = ''

      switch (error.constructor.name){
        case 'QueryResultError':
          message = 'The username/password does not match any user.'
          break;
        default:
          message = 'Unknown error logging in, please contact an admin.'
          break
      }

      data = {
        name: 'error',
        message: message
      }

      res.send(data)
    })
  }
});

module.exports = router; 
