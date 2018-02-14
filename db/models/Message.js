var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Chat message schema
var messageSchema = new Schema({
    author: String,
    date: {type: Date, default: Date.now},
    message: String,
    meta: {
        votes: {type: number, default: 0},
        favs: String
    }
});

//Message model
var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
