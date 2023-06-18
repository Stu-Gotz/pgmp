require("dotenv").config(); //get credentials
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const mongo_db = mongoose.connection;

mongo_db.on('error', (e) => {
  console.log(e);
});

mongo_db.once('connected', () => {
  console.log('connected');
});

console.log('database connected');


module.exports = mongo_db;