const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require("../services");


const register = catchAsync(async (req, res) => {
    let resp = { user: null, tokens: null };
    resp.user = await userService.createUser(req.body);
    resp.tokens = await tokenService.generateAuthTokens(resp.user)
    res.status(201).send(resp).end()
});

const login = catchAsync(async (req, res) => {
    let resp = { user: null, tokens: null };
    const { email, password } = req.body;
    resp.user = await authService.loginUserWithEmailAndPassword(email, password);
    resp.tokens = await tokenService.generateAuthTokens(resp.user);
    res.status(200).send(resp).end()
});

module.exports = { register, login }