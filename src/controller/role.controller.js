const express = require('express');
const { Role } = require("../model");


const getAllRoles = async (req, res) => {
    try {
        const Roles = await Role.find();
        return res.status(200).send({
            status: true,
            message: "Roles fetched successfully",
            data: Roles
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "FAILED",
            data: []
        })
    }
}

const createRole = async (req, res) => {
    try {
        const Roles = new Role(req.body)
        await Roles.save();
        return res.status(200).send({
            status: true,
            message: "Role Created",
            data: Roles
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Failed to create Role",
            data: []
        })
    }
}


const updateRole = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateRole = req.body;
        const RoleDta = await Role.findByIdAndUpdate(_id, updateRole, { new: true });
        return res.status(200).send({
            status: true,
            message: "role updated",
            data: RoleDta
        })
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Failed to Update",
            data: []
        })
    }
}

const deleteRole = async (req, res) => {
    try {
        const _id = req.params.id;
        const RoleData = await Role.findByIdAndDelete(_id);
        return res.status(200).send({
            status: true,
            message: "role deleted succcessfully",
            data: RoleData
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "role deleted successfully",
            data: []
        })
    }
}


const getRoleById = async (req, res) => {
    try {
        const _id = req.params.id;
        const RoleData = await Role.findById(_id).populate("permission", { displayName: 1, _id: 1 });
        if (!RoleData) {
            throw new Error("role not found")
        }
        else {
            return res.status(200).send({
                status: true,
                message: "role fetched",
                data: RoleData
            })
        }
    } catch (error) {

        return res.status(500).send({
            status: false,
            message: "Failed to FETCH",
            data: null
        })
    }
}

module.exports = { getAllRoles, createRole, updateRole, deleteRole, getRoleById }