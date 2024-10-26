const users = require('../Models/userSchema');

exports.register = async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    try {
        if (password !== confirmPassword) {
            return res.status(400).json("Passwords do not match.");
        }

        // Check if user already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(409).json("User already registered.");
        }

        // Create and save new user
        const newUser = new users({
            email: email,
            password: password
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
