const playersCollection = require('../schema/userschema.js');
const connexio = require('./poolmongo.js');

async function newPlayerAsync(player) {
    let newPlayer = new playersCollection.playerModel();
    newPlayer.name = player.name
    newPlayer.email = player.email;
    console.log("player nickemail", player.nickemail);
    newPlayer.email = player.email;
    newPlayer.pwd = player.pwd;
    newPlayer.salt = player.salt;
    newPlayer.rol = player.rol;
    newPlayer.investedMinutes = 0;
    newPlayer.mSession = 0;
    newPlayer.zKilled = 0;
    newPlayer.deads = 0;

    console.log("Ha entrat a newPAsync");

    return await newPlayer.save();
}

async function getPlayersAsync() {
    var query = playersCollection.playerModel.find().lean();
    const result = await query.exec();

    const docsJSON = result.map((doc) => {
        return doc;
    });


    return docsJSON;
}

async function updatePlayerAsync(idPlayer, playerNewStats) {

    const filter = { email: idPlayer };

    const update = {
        investedSeconds: playerNewStats.investedSeconds,
        rounds: playerNewStats.rounds,
        deads: playerNewStats.deads

    }


    let doc = await playersCollection.playerModel.findOneAndUpdate(filter, update);



}
async function deletePlayerAsync(nickemail) {

    console.log("Ha entrat a delete player async");



    let borrat = await playersCollection.playerModel.deleteOne({ email: nickemail }, function(err) {
        if (err) {
            console.log(err);
        }
    }).clone();

    console.log("Usuari borrat: ", borrat)

    return borrat;

}


async function findPlayerAsync(name) {

    console.log("Ha entrat a findPlayer");

    let usernameTrobat = false;
    let existingPlayerUserName = await playersCollection.playerModel.findOne({ name: name }).exec();

    if (existingPlayerUserName != null) {
        usernameTrobat = true
    }
    //TRUE SI EL TROBA
    return usernameTrobat


}
async function findPlayerAsync1(name) {
    console.log("Ha entrat a findPlayer");
    let res = null;
    let usernameTrobat = false;
    let existingPlayer = await playersCollection.playerModel.findOne({ name: name }).exec();

    if (existingPlayer != null) {
        usernameTrobat = true
    }
    if (usernameTrobat) {
        res = existingPlayer;
    }
    return res
}
async function findEmailAsync(email) {

    console.log("Ha entrat a findEmail");

    let emailTrobat = false;
    let existingPlayerEmail = await playersCollection.playerModel.findOne({ email: email }).exec();

    console.log("Existing player EXamil: ", existingPlayerEmail);


    if (existingPlayerEmail != null) {
        emailTrobat = true
    }
    return existingPlayerEmail;
}


module.exports = { getPlayersAsync, newPlayerAsync, updatePlayerAsync, deletePlayerAsync, findPlayerAsync, findEmailAsync, findPlayerAsync1 };