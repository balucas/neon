/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// import bcrypt from 'bcrypt';
// import Sequelize from 'sequelize';
const jwtSecret = require('./jwtConfig');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../database/user');

passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    (req, username, password, done) => {

      try {
        User.find(req.body.email)
        .then(user => {
          if (user != null) {
            console.log('username or email already taken');
            return done(null, false, {
              message: 'username or email already taken',
            });
          }
          User.create({
            email: username,
            password: password,
            firstname: req.body.firstName,
            lastname: req.body.lastName
          }).then(user => {
            console.log('created user')
            return done(null, user);
          })
        });
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      console.log('uselogin');
      try { 
        User.authenticate(username, password)
          .then(user => {
            console.log('authuser ' + user);
            if (user === null) {
              return done(null, false, { message: 'bad username' });
            }else{
              return done(null, user);
            }
        });
      } catch (err) {
        console.log('ERR use login: ' + err);
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      User.findOne({
        where: {
          id: jwt_payload.id,
        },
      }).then(user => {
        if (user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);
