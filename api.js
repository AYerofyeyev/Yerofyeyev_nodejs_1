var mongoose = require('mongoose');
var Message = require('./db/models/Message');

// Create connection to MongoDB Database
var db = mongoose.connect('mongodb://127.0.0.1:27017/chat');

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function callback () {
//     console.log("Connected!");
// });

//CREATE
exports.add = function (MessageData) {
    return new Message(MessageData).save();
};

//Find one
exports.findOne = function(id){
    return Item.findOne(id)
}

//Find All
exports.find = function (queryData) {
    return Message.find(queryData);
};

//DELETE
exports.removeOne = function(id){
    return Message.findOneAndRemove(id)
}
