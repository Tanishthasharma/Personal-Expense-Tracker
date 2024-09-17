const mongoose = require('mongoose');

const db = async() =>{
    try{
         // Set strictQuery to false or true based on your requirement
         mongoose.set('strictQuery', false); // or true if you want strict mode
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error){
        console.log('DB Connection Error');
    }
};

module.exports = {db};