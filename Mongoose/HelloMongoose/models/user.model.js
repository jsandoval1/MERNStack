// 1- 
const mongoose = require('mongoose');

// 2- 
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

// 3-
const User = mongoose.model('User', UserSchema);

//4- 
module.exports = User;
