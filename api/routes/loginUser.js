/* eslint-disable no-console */
// import jwt from 'jsonwebtoken';
// import passport from 'passport';
// import jwtSecret from '../auth/jwtConfig';

const jwt = require('jsonwebtoken');
const passport = require('passport');
const jwtSecret = require('../auth/jwtConfig');

const User =  require('../database/user'); 
var express = require('express');
var router = express.Router();
 
router.post('/register', (req, res, next) => {
  console.log('registerUser');
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      req.logIn(user, error => {
        console.log(user);
        const data = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          username: user.username,
        };
        console.log(data);
        email = req.body.email;
        User.findOne(email)
        .then(user => {
          console.log(user);
          res.status(200).send({ message: 'user created' });
        });
      });
    }
  })(req, res, next);
});


router.post('/login', (req, res, next) => {
  console.log('loginUser');
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(users, () => {
        console.log(req.body);
        User.authenticate(req.body.email, req.body.password)
          .then(function(user){
          console.log(user);
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          delete user.id;
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
            user
          });
        });
      });
    }
  })(req, res, next);
});

module.exports = router;
