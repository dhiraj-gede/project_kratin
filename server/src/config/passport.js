const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const config = require('./config')
const {tokenTypes} = require('./token')
const { User } = require("../models");
/**
 * These config options are required
 * Option 1: jwt secret environment variable set in ".env"
 * Option 2: mechanism to fetch jwt token from request Authentication header with the "bearer" auth scheme
 */
const jwtOptions = {
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
  
const jwtVerify = async (payload, done) => {
    try {
      if (payload.type !== tokenTypes.ACCESS) {
        done(null, false, {message: "Invalid token type"})
      }
      const user = await User.findById(payload.sub);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};