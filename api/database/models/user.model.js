const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
    email: { type: String },
    password : { type: String }
});

const User = mongoose.model('users', userSchema);

module.exports = User;