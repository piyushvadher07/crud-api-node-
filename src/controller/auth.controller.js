const express = require("express");
const { User } = require("../model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    const { name, email, password, phone, username } = req.body;
    try {
        const checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            return res.status(400).send({
                status: false,
                message: "User already exists",
                data: checkUser
            });
        }
        const user = await User.create({ name, email, password, phone, username });
        const token = jwt.sign(
            { user },
            "randomString",
            { expiresIn: "1d" }
        );
        return res.status(201).json({ user: user, token: token });
    } catch (error) {

        return res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send({
                status: false, message: "User not found"
            });
        }
        if (user.password !== password) {
            return res.status(400).send({
                status: false, message: "Password is incorrect"
            });
        }
        const token = jwt.sign(
            { user },
            "randomString",
            { expiresIn: "1d" }
        );
        return res.status(200).json({ user: user, token: token, message: "login successfully" });
    } catch (error) {

        return res.status(400).json({ error: error.message });
    }
}


module.exports = { register, login };