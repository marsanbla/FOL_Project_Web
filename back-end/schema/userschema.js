const { Int32 } = require('mongodb');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var playerSchema = new schema({
    name: String,
    email:String,
    id:String,
    pwd:String,
    salt:String

    

});
module.exports = {
    playerModel: mongoose.model('Player', playerSchema),
}