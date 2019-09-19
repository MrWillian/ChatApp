const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema({
    id_message: String,
    id_sender: String,
    id_receiver: String,
}, {
    timestamps: true,
});

module.exports =  model('Conversation', ConversationSchema);
