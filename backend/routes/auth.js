const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        res.status(422).json({message: "Empty fields"});
        return;
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message : "success" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(422).json({message: "Empty fields"});
        return;
    }
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(403).json({ message: "Invalid credentials" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(403).json({ message: "Invalid credentials" });

       
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;
