var mongoose = require('mongoose');
async function iniciar() {



    let con;

    mongoose.set('strictQuery', false);


    var prom = await new Promise(async(resolve, reject) => {

        try {

            con = await mongoose.connect('mongodb+srv://folp:c5M2VIHa79LHT4vo@projecte.x0sc3re.mongodb.net/test');
            //console.log("Connexio BD: ", con);
        } catch (err) {
            console.log(err);
        }

        resolve(con);


    });


    return prom;

}
module.exports = { iniciar };