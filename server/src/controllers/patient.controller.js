const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require("../services");
const ApiError = require('../utils/ApiError');

const getUser = catchAsync(async (req, res) => {
    if (req.params.userId != req.user._id) {
        throw new ApiError(
            httpStatus.FORBIDDEN,
            "User not authorized to access this resource"
        );
    }

    const data = await userService.getUserById(req.user._id);
    if (!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if (data.email != req.user.email) {
        throw new ApiError(
            httpStatus.FORBIDDEN,
            "User not authorized to access this resource"
        );
    }
    else
        res.send(data)

})


const submitData = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.user._id);
    if (!user)
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");

    if (user.email != req.user.email) {
        throw new ApiError(
            httpStatus.FORBIDDEN,
            "User not authorized to access this resource"
        );
    }
    const data = await userService.setPatientDetails(user, req.body);
    res.send(data);
})

module.exports = { submitData, getUser }