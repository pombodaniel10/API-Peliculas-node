const mongoose = require('mongoose');
const config = require('../config/database');

//Connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true
});

//On connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database "+config.database);
});

//Error connection
mongoose.connection.on('error', (err) => {
  console.log("Database error: "+err);
});

module.exports = mongoose;