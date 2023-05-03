const { Int32 } = require('mongodb');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var playerSchema = new schema({
    first_name: String,
    last_name: String,
    email:String,
    id:String
    

});
module.exports = {
    playerModel: mongoose.model('Player', playerSchema),
}