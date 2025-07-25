const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        default:"user"
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    password: {
        type: String,
        default: "pass"
    }
});

const userdata = new mongoose.model('user', userSchema);
module.exports = userdata;

