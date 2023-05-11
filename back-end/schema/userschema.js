const { Int32 } = require('mongodb');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var playerSchema = new schema({
    name: String,
    email: String,
    id: String,
    pwd: String,
    salt: String,
    gameTime: Number,
    askedQ: Number,
    correctAns: Number,
    wrongAns: Number,
    points: Number,
    rol: String

});
module.exports = {
    playerModel: mongoose.model('Player', playerSchema),
}