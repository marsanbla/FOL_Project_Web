var mongoose = require('mongoose');
var schema = mongoose.Schema;

var questionSchema = new schema({
    tema:String,
    title: String,
    plantejament: String,
    opcions: [String],
    resposta: String,
});
module.exports = {
    settingsModel: mongoose.model('Preguntes', questionSchema),
}