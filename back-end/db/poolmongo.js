
var mongoose = require('mongoose');
async function iniciar() {



    let con;

    mongoose.set('strictQuery', false);


    var prom = await new Promise( async (resolve, reject) => {

        try{

            con = await mongoose.connect('mongodb://127.0.0.1:27017/test');
        }
        catch(err){
            console.log(err);
        }

        resolve(con);      


    });


    return prom;
   
}
module.exports = { iniciar };