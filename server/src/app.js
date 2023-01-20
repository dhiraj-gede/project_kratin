const express  = require('express');
const cors = require('cors');
const helmet = require("helmet");
const compression = require('compression');
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const routes = require("./Routes/v1")
const ApiError = require("./utils/ApiError");
const {errorHandler} = require("./middlewares/error");
// set security HTTP headers - https://helmetjs.github.io/

const app = express();


app.use(helmet());
// gzip compression
app.use(compression());


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));




//enable cors
app.use(cors());
app.options("*",cors());

// Initialize passport  "jwt" authentication strategy
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);


// Reroute all API request starting with "/v1" route
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
});
app.use(errorHandler);

// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//     next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
// });



module.exports = app;