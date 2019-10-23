const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bloodRequirment = new Schema({
    bloodGroup: {
        type: String,
        // required: true
    },
    pintRequired: {
        type: String,
        // required: true
    },
    urgency: {
        type: String,
        // required: true
    },
    country: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    hospital: {
        type: String,
        // required: true
    }
    ,
    relateWithPatient: {
        type: String,
        // required: true
    },
    contactUs: {
        type: String,
        // required: true
    },
    additionInstruction: {
        type: String,
        // required: true
    }
});

const blood_Requirment = mongoose.model('Blood_Requirement', bloodRequirment)
module.exports = blood_Requirment