const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
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
    selectedHeight: {
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
    stayingCountry: {
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
    siblings: {
        type: String, 
        required: true
    },
    houseDetails: {
        type: String,
        required: true
    },
    // Partner Preference
    partnerEducation: {
        type: String,
        required: true
    },
    partnerJobStatus: {
        type: String,
        required: true
    },
    partnerSelectedHeight: {
        type: String,
        required: true
    },
    partnerBodyPhysique: {
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
    partnerStayingCountry: {
        type: String,
        required: true
    },
    // Other Details
    partnerAnyDemand: {
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
