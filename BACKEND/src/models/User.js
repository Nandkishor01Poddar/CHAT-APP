const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        unique: true,
        sparse: true  // Allows multiple null/undefined values
    },
    profileImage: {
        type: String,
        default: ""
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User