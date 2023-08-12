import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 1,
    },
    mobile: {
        type: Number,
    },
    address: {
        type: String,
    },
    created: {
        type: Date,
        inmutable: true,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)