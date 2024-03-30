const mongoose = require("mongoose");

// SCHEMA

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true } );

const User = mongoose.model("User", userSchema);

module.exports = User;