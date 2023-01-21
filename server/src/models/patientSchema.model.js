const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        weight: {
            type: Number,
            required: true,
            trim: true,
            lowercase: true,
        },
        Height: {
            type: Number,
            required: true,
            trim: true,
            lowercase: true,
        },

        image: {
            type: String,
            required: false,
            trim: true,
        },
    }, {
    timestamps: false,
}
)

const Patient = mongoose.model('Patient' , patientSchema, "patient");

module.exports.Patient = Patient;
module.exports.patientSchema = patientSchema;