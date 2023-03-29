const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true 
    },
    profession: {
        type: String,
        required: true 
    },
    income: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    caste: {
        type: String,
        required: true
    },
    sect: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    // Family Details
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    brothers: {
        type: String, 
        required: true
    },
    sisters: {
        type: String,
        required: true
    },
    // Partner Preference
    partnerEducation: {
        type: String,
        required: true
    },
    jobStatus: {
        type: String,
        required: true
    },
    partnerHeight: {
        type: String,
        required: true
    },
    bodyPhysique: {
        type: String,
        required: true
    },
    partnerAge: {
        type: String,
        required: true
    },
    partnerGender: {
        type: String,
        required: true
    },
    partnerMaritalStatus: {
        type: String,
        required: true
    },
    partnerReligion: {
        type: String,
        required: true
    },
    partnerCaste: {
        type: String,
        required: true
    },
    partnerSect: {
        type: String,
        required: true
    },
    partnerCity: {
        type: String,
        required: true
    },
    partnerCountry: {
        type: String,
        required: true
    },
    // Other Details
    additional: {
        type: String,
        required: true
    },
    // Status
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true });

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
