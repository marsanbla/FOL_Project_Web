const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const app = express();
const http = require('http');
const { Socket } = require('dgram');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const playersCollection = require('../schema/userschema.js');
const adminUsers = require('../db/addu.js');
const connexio = require('../db/poolmongo.js');
const adminSettings = require('../db/usersettings.js');
const { notEqual } = require('assert');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });



// Serve static files from the public directory
app.use(express.static('public'));

async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://folp:c5M2VIHa79LHT4vo@projecte.x0sc3re.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    return client.db('test');
  }
  
  app.use(cors({
    origin: 'http://127.0.0.1:5500',
  }));
  
  
  app.post('/upload', async (req, res) => {
    try {
      const db = await connectToDatabase();
  
      const collection = db.collection('profile-pictures');
      const result = await collection.insertOne({ image: req.body.image });
  
      res.send('Profile picture uploaded successfully');
    } catch (e) {
      console.error(e);
      res.status(500).send('Error uploading profile picture');
    }
  });




const PORT = 3012;
app.use(bodyParser.json());
var users = [];


let nomUsuari = "";


app.use(session({
    secret: "2002",
    resave: true,
    saveUninitialized: true,
    user: { isAuth: false, roles: [] },
    users: []

}));

async function getSalt(saltRounds) {
    let salt = await bcrypt.genSalt(saltRounds);
    return salt;
}

//passwd Hash
async function hashPassword(passwd, salt) {
    let hash = await bcrypt.hash(passwd, salt);
    return hash;
}


//Middleware necessari per parsejar el body i colocar-ho dintre del req.body.
app.use(express.json());


//Configuració del mòdul de cors. 
//Per cada petició es crida aquest middleware (app.use)
//rep dos parametres el mòdul cors. El primer és l'origen, i el segon és una funció
//de callback que ens permet controlar si acceptem la petició o no.
/*/app.use(cors({
    origin: function (origin, callback) {
        console.log(origin);
        return callback(null, true)
    }
}));
/*/


//FUNCIO REGISTRO ANDROID
app.post('/registerUserAndroid', async (req, res) => {

    //console.log("Ha entrat a register");

    connexio.iniciar();

    let nom = req.body.name;
    let email = req.body.email;
    let passwd = req.body.password;
    const saltRounds = 10;
    let salt;


    let player = {
        name: nom,
        email: email,
        pwd: passwd,
        salt: "",
        rol: "user",
        /*Player Stats*/
        investedMinutes: 0,
        mSesions: 0
    };

    console.log("PARAMS " + nom + "/" + email + "/" + passwd)


    // Regular expression for validating email addresses and password
    const usernameRegex = /^[a-zA-Z0-9_-]{1,20}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,16}$/;

    //AÑADIR metodo por si user no existe
    if (emailRegex.test(email) && pswdRegex.test(passwd) && usernameRegex.test(nom)) {
        let existingPlayer = await adminUsers.findPlayerAsync(nom);
        let existingEmail = await adminUsers.findEmailAsync(email);
        console.log("existingPlayer: ", existingPlayer);

        if (existingPlayer) {
            //res.send({ success: false, message: 'Email already in use' });
            res.status(455).send({ success: false, message: 'UserName already in use' });
            console.log("UserName already in use");    
        }if (existingEmail) {
            //res.send({ success: false, message: 'Email already in use' });
            res.status(456).send({ success: false, message: 'Email already in use' });
            console.log("Email already in use");    
        }
        else {

            //console.log("Ha entrat al else");

            try {
                salt = await getSalt(saltRounds);
                encryptedPass = await hashPassword(passwd, salt);

            }
            catch (error) {
                console.log(error);
            }

            player.salt = salt;
            player.pwd = encryptedPass;
            //player.email=email;

            adminUsers.newPlayerAsync(player);
            console.log('usuari guardat');
            //res.send({ success: true });
            res.status(201).send({ success: true });

        }
    } else {
        if (!emailRegex.test(email)) {
            //res.send('1');
            res.status(452).send()//email not valid
            console.log("Email is not correct!");
        } if (!pswdRegex.test(passwd)) {
            //res.send('2');
            res.status(453).send()//passwd not valid
            console.log("Password is not correct!");
        } if (!usernameRegex.test(nom)) {
            //res.send('3');
            res.status(454).send()//user not valid
            console.log("User is not correct");
        }
    }
});

app.post('/register', async (req, res) => {

    console.log("Ha entrat a register");

    connexio.iniciar();

    let nom = req.body.name;
    //let email=req.body.email;
    let passwd = req.body.password;
    const saltRounds = 10;
    let salt;


    let player = {
        name: nom,
        email: "",
        pwd: "",
        salt: "",
        rol: "user",
        /*Player Stats*/
        investedMinutes: 0,
        mSesions: 0,
        zKilled: 0,
        deads: 0
    };


    let existingUsername = await adminUsers.findPlayerAsync(nom);


    console.log("existingUsername: ", existingUsername);


    if (existingUsername) {

        res.status(400).send({ success: false, message: 'Email already in use' });


    }
    else {

        console.log("Ha entrat al else");

        try {
            salt = await getSalt(saltRounds);
            encryptedPass = await hashPassword(passwd, salt);

        }
        catch (error) {
            console.log(error);
        }

        player.salt = salt;
        player.pwd = encryptedPass;
        //player.email=email;

        adminUsers.newPlayerAsync(player);
        //console.log('usuari guardat');
        //res.send({ success: true });
        res.status(200).send({ success: true });

    }
});


//Ruta a /auth amb dos parametres que s'envien per "param"
app.post("/authPost", async (req, res) => {


    connexio.iniciar();

    let name = req.body.name;
    let passwd = req.body.password;
    console.log("PARAMS "+name+passwd)
    ret = await checkUserFromJson(name, passwd);

    console.log("Ret dins authpost", ret.isAuth);

    if (ret.isAuth) {
        res.status(202).send();
        nomUsuari = ret.name;
    }
    else {
        res.status(401).send(JSON.stringify(ret));

    }

    session.user = ret;



});


//Ruta a /logOutPost amb dos parametres que s'envien per "param"
app.get("/getGameVariables", async (req, res) => {


    let playerSpeed = 1;



});


//comprimir assets
app.get("/packAssets", async (req, res) => {

    var archiver = require('archiver');
    var archive = archiver.create('zip', {});
    var output = fs.createWriteStream(__dirname + '/assets.zip');
    archive.pipe(output);


    archive
        .directory(__dirname + '/assets')
        .finalize();

    archive.bulk([{
        expand: true, cwd: './assets/',
        src: ['**/*']
    }]).finalize();

});





//Ruta a /logOutPost amb dos parametres que s'envien per "param"
app.post("/logOutPost", async (req, res) => {

    var ret = {
        text: "No hi ha cap sessió que eliminar"
    };
    if (session.user && session.user.isAuth) {
        session.user = { isAuth: false, roles: [] }
        var ret = {
            text: "sessió eliminada correctament"
        };
    }


    console.log(ret)
    res.send(JSON.stringify(ret));

});

app.listen(PORT, () => {
    console.log("Server Running [" + PORT + "]");
});


async function checkUserFromJson(name, passwd) {
    let query = "";
    let nom = "";

    let contrasenyaBase = "";
    let contrasenyaAComprovar = "";
    let ret = {
        isAuth: false,
        roles: [],
        name: ""
    };

    console.log("Nom passat: " + name);

    var prom = await new Promise(async (resolve, reject) => {

        try {
            query = await adminUsers.findPlayerAsync1(name);

            console.log("Query: ", query);

        }
        catch (err) {

            console.log("ERROR"+err);

        }


        if (query != null) {

            try {
                //console.log("AAAAAAAAAAAA")
                console.log("SALT "+query.salt)
                //ESTA LINIA ES LA QUE PETA
                contrasenyaAComprovar = await hashPassword(passwd, query.salt);


            }
            catch (err) {
                console.log(err);

            }

            ret.name = query.name;
            contrasenyaBase = query.pwd;
            ret.roles = ['user'];



            if (name == query.name && contrasenyaAComprovar == contrasenyaBase && contrasenyaAComprovar != "" && name != "") {

                ret.isAuth = true;




            }


        }

        console.log("Ret: " + ret.isAuth);


        resolve(ret);

    });



    console.log("promesa: " + prom);

    return prom;
}


async function retornaUsers() {
    let usuaris = [];


    try {
        query = await adminUsers.getPlayersAsync();


    }
    catch (err) {
        console.log(err);
    }


    usuaris = query;



    return usuaris;
}



app.post("/saveStats", (req, res) => {


    let playerNewStats = {
        investedSeconds: req.body.investedSeconds / 1000,
        rounds: req.body.rounds,
        deads: req.body.deads
    }

    adminUsers.updatePlayerAsync(nomUsuari, playerNewStats);



})


app.post("/usersPost", async (req, res) => {

    let users = await adminUsers.getPlayersAsync();




    session.users = users;


    res.send(JSON.stringify(users));

});


app.post("/deletePost", async (req, res) => {

    connexio.iniciar();

    console.log("Ha entrat a delete post server");
    let username = req.body.userid;


    await adminUsers.deletePlayerAsync(username);


    let users = await retornaUsers();

    session.users = users;



    res.send(JSON.stringify(users));



});




function afegirSettings() {

    console.log("Ha afegit settings");

    connexio.iniciar();

    newSettings = {
        identificacio: 1,
        playerSpeed: 20,
        playerMaxHealth: 100,
        playerFireRate: 0.1
    }

    console.log("Zombie health desdel server", newSettings.zombieMaxHealth);


    adminSettings.newSettingsAsync(newSettings);
}

app.post("/getSettingsPost", async (req, res) => {

    connexio.iniciar();


    let settings = await adminSettings.getSettingsAsync();

    let ret = JSON.stringify(settings)

    res.send(ret);




});



app.post("/updateSettingsPost", async (req, res) => {

    console.log("Ha entrat a update post");

    let newSettings = {
        playerSpeed: req.body.playerSpeed,
        playerMaxHealth: req.body.playerHealth,
        playerFireRate: req.body.playerFireRate


    }

    await adminSettings.updateSettingsAsync(1, newSettings);

})

//console.log("Nom usuari fora: ", nomUsuari);

app.post('/upload', upload.single('profilePic'), (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;

        const db = client.db(dbName);

        const collection = db.collection('users');

        const picture = req.file.buffer;

        collection.updateOne(
            { _id: ObjectId(req.body.userId) },
            { $set: { profilePic: Binary(picture) } },
            (err, result) => {
                if (err) throw err;

                res.send('Profile picture uploaded successfully');
            }
        );
    });
});