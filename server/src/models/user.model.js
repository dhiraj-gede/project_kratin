const mongoose = require('mongoose')

const validator = require('validator');
const config = require('../config/config');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        validate: (newValue) => validator.isEmail(newValue)
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error(
                    "Password must contain at least one letter and one number"
                );
            }
        },
    },
    userType: {
        type: String,
        default: config.default_userType,
        validate(value) {
            if (value != 'patient' && value != 'doctor' && value != 'admin') {
                throw new Error(
                    "invalid user type"
                );
            }
        }
    },
    userData:{
        weight: {
            type: Number,
            required: false,
            trim: true,
        },
        height: {
            type: Number,
            required: false,
            trim: true,
        },
    
        image: {
            type: String,
            required: false,
            trim: true,
        },
    }
},
    // Create createdAt and updatedAt fields automatically
    {
        timestamps: true,
    })

userSchema.statics.isEmailTaken = async function (email) {
    const data = await this.findOne({ email });
    return !!data;
}

userSchema.methods.isPasswordMatch = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = { User };