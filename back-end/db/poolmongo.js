var mongoose = require('mongoose');
async function iniciar() {



    let con;

    mongoose.set('strictQuery', false);


    var prom = await new Promise(async(resolve, reject) => {

        try {
            //mongodb+srv://folp:c5M2VIHa79LHT4vo@projecte.x0sc3re.mongodb.net/test
            con = await mongoose.connect('mongodb://127.0.0.1:27017/test');
            //console.log("Connexio BD: ", con);
        } catch (err) {
            console.log(err);
        }

        resolve(con);


    });


    return prom;

}
module.exports = { iniciar };