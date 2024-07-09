const mongoose = require("mongoose");

const PermissionSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Permission", PermissionSchema)