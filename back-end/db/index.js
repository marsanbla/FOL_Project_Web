const mongoose = require("mongoose");
const playersCollection = require("../models/playerSchema");
const adminUsers = require("./adMongoDBplayers");
const connexio = require("./adPoolMongoDB");

function main() {
  connexio.iniciar();

  let jugador = {
    nickname: "Joan",
    pwd: "1234",

    /*Player Stats*/
    investedMinutes: 0,
    mSesions: 0,
    zKilled: 0,
    deads: 0,
  };

  adminUsers.newPlayerAsync(jugador);

  let zombie 
}

main();