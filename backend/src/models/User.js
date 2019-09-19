const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    age: Number,
    cell_number: String,
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);
