var mongoose = require('mongoose');
var schema = mongoose.Schema;

var settingsSchema = new schema({

    identificacio:Number,
    playerSpeed: Number,
    playerMaxHealth: Number,
    playerFireRate: Number,
});
module.exports = {
    settingsModel: mongoose.model('Settings', settingsSchema),
}