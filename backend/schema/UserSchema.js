const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    password: {
        type: String
    }
});

const userdata = new mongoose.model('user', userSchema);
module.exports = userdata;

