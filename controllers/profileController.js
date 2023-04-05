const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                profile
            }
        });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json({
            status: 'success',
            data: {
                profiles
            }
        });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Get Profile by User ID
exports.getProfileByUserId = async (req, res) => {
    try {
        const profile = await Profile.find({ user: req.params.id });
        res.status(200).json({
            status: 'success',
            data: {
                profile
            }
        });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Get Profile by ID
exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                profile
            }
        });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Edit Profile
exports.editProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                profile
            }
        });
    } catch (error) {
        
    }
}

// Delete Profile
exports.deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                profile
            }
        });
    } catch (error) {
        
    }
}