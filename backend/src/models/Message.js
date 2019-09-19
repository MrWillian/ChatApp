const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
    message: String,
    date: { type: Date, default: Date.now }
});

module.exports = model('Message', MessageSchema);
