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

