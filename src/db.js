const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.Promise = global.Promise;

module.exports = function connectToDb() {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(`Connected to MongoDB: ${chalk.cyan(process.env.DB_URL)}`))
    .catch(err => console.log(`Error occured while connection was being made: ${chalk.red(err.message)}`));
};
