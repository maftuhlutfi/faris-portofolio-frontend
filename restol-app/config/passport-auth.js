const LocalStrategy = require('passport-local').Strategy
const {User} = require('../models')
const bcrypt = require('bcrypt')

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

module.exports = passport => {
    passport.use(
        'login', 
        new LocalStrategy({
            usernameField: 'email', 
            passwordField: 'password'
        },
        (email, password, done) => {
            User.getUserByEmailWithPassword(email, (err, user) => {
                if (err) return done(err)
                if (!user) return done(null, false)
                
                bcrypt.compare(password, user.password, (error, result) => {
                    if (error) done(error)
    
                    if (result) {
                        delete user.password
                        done(null, user)
                    } else {
                        done(null, false)
                    }
                })
            })
        }
    ));
    passport.use(
        new JWTstrategy(
          {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
          },
          async (token, done) => {
            try {
              return done(null, token.user);
            } catch (error) {
              console.log(error)
              done(error);
            }
          }
        )
      );
}
