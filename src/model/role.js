const mongoose = require("mongoose");
const permission = require("./permission");

const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    permission: {
        type: [mongoose.Types.ObjectId],
        default: null,
        ref: "Permission"
    }
})

module.exports = mongoose.model("Role", RoleSchema);