const { User } = require('../models/')
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");


const getUserById = async (_id) => {
    const data = User.findById(_id)
    if (!data)
        throw new ApiError(httpStatus.BAD_REQUEST, "\"\"userId\"\" must be a valid mongo id")
    return data
}

const getUserByEmail = async (email) => {
    const data = await User.findOne({ "email": email });
    return data;
}

const SALT_WORK_FACTOR = 10

async function createUser(user) {
    if (await User.isEmailTaken(user.email))
        throw new ApiError(httpStatus.BAD_REQUEST, `Email already taken`);

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    user.password = await bcrypt.hash(user.password, salt)
        .catch(err => new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err));

    const data = await User.create(user);
    return data;
}


const setPatientDetails = async (patient, newData)=>{
    
    patient.userData = newData;
    await patient.save();
    return patient.userData;
}
module.exports = { getUserByEmail, getUserById, createUser, setPatientDetails};