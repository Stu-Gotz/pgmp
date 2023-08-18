const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    dob: Date,
    teams: [Object],
    gender: String,
    location: String,
    age: Number,
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
