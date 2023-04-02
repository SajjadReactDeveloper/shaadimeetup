const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST api/users
// @desc    Register new user
// @access  Public
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    // Check empty fields
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    try {
        const user = await User.findOne({ email });
        if (user) throw Error('User already exists');

        const newUser = new User({
            name,
            email,
            password
        });

        // Create salt & hash
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(newUser.password, salt);
        if (!hash) throw Error('Something went wrong hashing the password');

        newUser.password = hash;
        const savedUser = await newUser.save();
        if (!savedUser) throw Error('Something went wrong saving the user');

        res.status(200).json({
            status: 'success',
            data: {
                user: savedUser
            }
        });

    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Check empty fields
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    try {
        const user = await User.findOne({ email });
        if (!user) throw Error('User does not exist');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

        if (!token) throw Error('Couldnt sign the token');

        res.status(200).json({
            token,
            user
        });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

// Get User from token
exports.getUser = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) throw Error('User does not exist');
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}