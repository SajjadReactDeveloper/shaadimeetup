const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dzqjxjx8f/image/upload/v1600000000/default-profile-picture-300x300-1_ynjxqg.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true});

module.exports = User = mongoose.model('users', UserSchema);
