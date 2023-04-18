const playersCollection = require('../models/playerSchema');
const connexio = require('./adPoolMongoDB');

async function newPlayerAsync(player) {
    let newPlayer = new playersCollection.playerModel();

    newPlayer.name = player.name;
    console.log("player nickname", player.nickname);
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

    const filter = { name: idPlayer };

    const update = {
        investedSeconds: playerNewStats.investedSeconds,
        rounds:playerNewStats.rounds,        
        deads: playerNewStats.deads

    }


    let doc=await playersCollection.playerModel.findOneAndUpdate(filter,update);



}
async function deletePlayerAsync(nickname) {

    console.log("Ha entrat a delete player async");



    let borrat = await playersCollection.playerModel.deleteOne({ name: nickname }, function (err) {
        if (err) {
            console.log(err);
        }
    }).clone();

    console.log("Usuari borrat: ", borrat)

    return borrat;

}


async function findPlayerAsync(name) {

    let res = null;

    console.log("Ha entrat a findPlayer");

    let trobat = false;


    let existingPlayer = await playersCollection.playerModel.findOne({ name: name }).exec();


    if (existingPlayer != null) {
        trobat = true;
    }

    if (trobat) {
        res = existingPlayer;
    }


  

    console.log("resultat fp: ", res);

    return res;

}


module.exports = { getPlayersAsync, newPlayerAsync, updatePlayerAsync, deletePlayerAsync, findPlayerAsync };