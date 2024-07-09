const express = require("express");
const { permission } = require("../model");


const getAllPermission = async (req, res) => {
    const { displayName } = req.query;
    try {
        let query = {};
        let filter = {}
        if (req.body.id) {
            filter = {
                ...filter,
                id: req.body.id
            }
        }
        if (displayName) {
            query.displayName = { $regex: displayName, $options: "i" };
        }
        const Permission = await permission.find(query);
        return res.status(200).send({
            status: true,
            message: "Permission list",
            data: Permission
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Permission failed to fetch",
            data: []
        })
    }
}


const createPermission = async (req, res) => {
    try {
        const { displayName, path } = req.body;
        const Permission = new permission({
            displayName, path
        });
        await Permission.save();
        return res.status(200).send({
            status: true,
            message: "Permission created",
            data: Permission
        })
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Permission failed to create",
            data: []
        })
    }
}


const updatePermission = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatePermission = req.body;
        const Permission = await permission.findByIdAndUpdate(_id, updatePermission, { new: true });
        return res.status(200).send({
            status: true,
            message: "Permission updated",
            data: Permission
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Permission failed to update",
            data: []
        })
    }
}


const deletePermission = async (req, res) => {

    try {
        const _id = req.params.id;
        const Permission = await permission.findByIdAndDelete(_id);
        return res.status(200).send({
            status: true,
            message: "Permission deleted",
            data: Permission
        })
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Permission failed to delete",
            data: []
        })
    }
}

const getPermissionById = async (req, res) => {
    try {
        const _id = req.params.id;
        const Permission = await permission.findById(_id);
        if (!Permission) {
            return res.status(404).send({
                status: false,
                message: "Permission not found",
                data: null
            });
        }
        return res.status(200).send({
            status: true,
            message: "Permission fetched successfully",
            data: Permission
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Failed to fetch permission",
            data: null
        });
    }
}



module.exports = { getAllPermission, createPermission, updatePermission, deletePermission, getPermissionById };