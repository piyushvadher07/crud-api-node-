const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: mongoose.Types.ObjectId,
        default: null,
        ref: "Role"
    }
}
);
const User = mongoose.model("User", userSchema);

module.exports = User;