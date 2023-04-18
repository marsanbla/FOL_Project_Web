var mongoose = require('mongoose');
var schema = mongoose.Schema;

var playerSchema = new schema({
    name: String,
    email:String,
    pwd: String,
    salt: String,
    rol: String,

    /*Player Stats*/
    investedSeconds: Number,
    rounds: Number,
    
    deads: Number
});
module.exports = {
    playerModel: mongoose.model('Player', playerSchema),
}