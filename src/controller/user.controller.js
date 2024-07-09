const express = require("express");
const { User } = require("../model");


const getAllUser = async (req, res) => {
    const { name, email } = req.query;
    try {
        let query = {};

        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (email) {
            query.email = { $regex: email, $options: "i" };
        }

        const userData = await User.find(query);

        return res.status(200).send({
            status: true,
            message: "All UserData fetched successfully",
            data: userData,
        });
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Failed to fetch users",
            data: [],
        });
    }
};



const createUser = async (req, res) => {

    try {
        const checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            return res.status(400).send({
                status: false,
                message: "User already exists",
                data: checkUser
            });
        }

        const user = new User(req.body);
        await user.save();
        return res.status(200).send({
            status: true,
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "An error occurred",
            error: error.message
        });
    }
}

const updateUser = async (req, res) => {

    try {
        const _id = req.params.id;
        const updateData = req.body;
        const user = await User.findByIdAndUpdate(_id, updateData, { new: true });
        return res.status(200).send({
            status: true,
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};


const deleteUser = async (req, res) => {

    try {
        const _id = req.params.id;
        const user = await User.findByIdAndDelete(_id);
        res.status(200).send({
            status: true,
            message: "User deleted successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }

}

const getUserId = async (req, res) => {
    try {
        const _id = req.params.id;
        const UserData = await User.findById(_id).populate("role", { name: 1, _id: 1 });
        if (!UserData) {
            return res.status(404).send({
                status: false,
                message: "UserData not found",
                data: null
            });
        }
        return res.status(200).send({
            status: true,
            message: "UserData fetched successfully",
            data: UserData
        });
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Failed to fetch UserData",
            data: null
        });
    }
}




module.exports = { getAllUser, createUser, updateUser, deleteUser, getUserId };