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
 
/**
 * /loginUser:
 *   post:
 *     tags:
 *       - Users
 *     name: Login
 *     summary: Logs in a user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - username
 *           - password
 *     responses:
 *       '200':
 *         description: User found and logged in successfully
 *       '401':
 *         description: Bad username, not found in db
 *       '403':
 *         description: Username and password don't match
 */


  router.post('/loginUser', (req, res, next) => {
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
