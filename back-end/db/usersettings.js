const settingsCollection = require('../models/settingsSchema');


async function newSettingsAsync(settings) {
    let newSettings = new settingsCollection.settingsModel();

    console.log("newsettings z m h: ", settings.zombieMaxHealth);

    console.log("new settings zombie damage", settings.zombieDamage);

    newSettings.identificacio = settings.identificacio;


    newSettings.zombieMaxHealth = settings.zombieMaxHealth;
    console.log("Zombie health dsdel ad mongo: ", newSettings.zombieMaxHealth);
    newSettings.zombieDamage = settings.zombieDamage;
    newSettings.zombieSpeed = settings.zombieSpeed;
    newSettings.playerSpeed = settings.playerSpeed;
    newSettings.playerMaxHealth = settings.playerMaxHealth;
    newSettings.playerFireRate = settings.playerFireRate;


    console.log("Ha entrat a newPAsync");

    return await newSettings.save();
}



async function getSettingsAsync() {
    var query = settingsCollection.settingsModel.findOne();
    const result = await query.exec();

    return result;


}

async function updateSettingsAsync(idPlayer, settingsNewStats) {


    console.log("Identificacio: " + idPlayer);

    const filter = { identificacio: idPlayer };
    const update = {
        zombieMaxHealth: settingsNewStats.zombieMaxHealth,
        zombieDamage: settingsNewStats.zombieDamage,
        zombieSpeed: settingsNewStats.zombieSpeed,
        playerSpeed: settingsNewStats.playerSpeed,
        playerMaxHealth: settingsNewStats.playerMaxHealth,
        playerFireRate: settingsNewStats.playerFireRate

    }



    let doc = await settingsCollection.settingsModel.findOneAndUpdate(filter, update);



}



module.exports = { newSettingsAsync, getSettingsAsync, updateSettingsAsync }
